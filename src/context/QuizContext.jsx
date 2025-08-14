import { createContext, useContext, useReducer, useEffect } from 'react';
import useQuizData from '../hooks/useQuizData';

// Create Quiz Context
const QuizContext = createContext();

// Action types for reducer
const QUIZ_ACTIONS = {
  SET_USER_EMAIL: 'SET_USER_EMAIL',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_CURRENT_QUESTION: 'SET_CURRENT_QUESTION',
  SELECT_ANSWER: 'SELECT_ANSWER',
  MARK_QUESTION_VISITED: 'MARK_QUESTION_VISITED',
  SUBMIT_QUIZ: 'SUBMIT_QUIZ',
  RESET_QUIZ: 'RESET_QUIZ',
  SET_QUESTIONS: 'SET_QUESTIONS',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR'
};

// Initial state
const initialState = {
  // Quiz data
  questions: [],
  loading: true,
  error: null,
  
  // Navigation
  currentPage: 'start', // 'start', 'quiz', 'report'
  currentQuestionIndex: 0,
  
  // User data
  userEmail: '',
  userAnswers: {}, // { questionIndex: selectedAnswer }
  visitedQuestions: new Set([0]), // Set of visited question indices
  
  // Quiz results
  quizResults: null,
  submittedAt: null,
  
  // Timer
  timeRemaining: 30 * 60, // 30 minutes in seconds
  isTimeExpired: false
};

// Reducer function
const quizReducer = (state, action) => {
  switch (action.type) {
    case QUIZ_ACTIONS.SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loading: false,
        error: null
      };

    case QUIZ_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case QUIZ_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case QUIZ_ACTIONS.SET_USER_EMAIL:
      return {
        ...state,
        userEmail: action.payload
      };

    case QUIZ_ACTIONS.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };

    case QUIZ_ACTIONS.SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: action.payload,
        visitedQuestions: new Set([...state.visitedQuestions, action.payload])
      };

    case QUIZ_ACTIONS.SELECT_ANSWER:
      return {
        ...state,
        userAnswers: {
          ...state.userAnswers,
          [action.payload.questionIndex]: action.payload.selectedAnswer
        }
      };

    case QUIZ_ACTIONS.MARK_QUESTION_VISITED:
      return {
        ...state,
        visitedQuestions: new Set([...state.visitedQuestions, action.payload])
      };

    case QUIZ_ACTIONS.SUBMIT_QUIZ:
      const results = {
        userAnswers: state.userAnswers,
        visitedQuestions: Array.from(state.visitedQuestions),
        submittedAt: new Date().toISOString(),
        totalQuestions: state.questions.length,
        answeredQuestions: Object.keys(state.userAnswers).length,
        timeUsed: (30 * 60) - state.timeRemaining
      };

      return {
        ...state,
        quizResults: results,
        submittedAt: results.submittedAt,
        currentPage: 'report'
      };

    case QUIZ_ACTIONS.RESET_QUIZ:
      return {
        ...initialState,
        questions: state.questions, // Keep the questions data
        loading: false,
        error: state.error
      };

    default:
      return state;
  }
};

// Quiz Context Provider Component
export const QuizProvider = ({ children }) => {
  console.log('QuizProvider rendering...');
  const [state, dispatch] = useReducer(quizReducer, initialState);
  
  // Fetch quiz data using the custom hook
  const { questions, loading, error } = useQuizData();
  console.log('QuizProvider data:', { questions: questions.length, loading, error });

  // Update state when quiz data is loaded
  useEffect(() => {
    if (questions.length > 0) {
      console.log('Setting questions in state:', questions.length);
      dispatch({ type: QUIZ_ACTIONS.SET_QUESTIONS, payload: questions });
    }
  }, [questions]);

  useEffect(() => {
    console.log('Setting loading state:', loading);
    dispatch({ type: QUIZ_ACTIONS.SET_LOADING, payload: loading });
  }, [loading]);

  useEffect(() => {
    if (error) {
      dispatch({ type: QUIZ_ACTIONS.SET_ERROR, payload: error });
    }
  }, [error]);

  // Action creators
  const actions = {
    // Start quiz
    startQuiz: (email) => {
      dispatch({ type: QUIZ_ACTIONS.SET_USER_EMAIL, payload: email });
      dispatch({ type: QUIZ_ACTIONS.SET_CURRENT_PAGE, payload: 'quiz' });
    },

    // Navigate to specific question
    navigateToQuestion: (questionIndex) => {
      dispatch({ type: QUIZ_ACTIONS.SET_CURRENT_QUESTION, payload: questionIndex });
    },

    // Select an answer
    selectAnswer: (questionIndex, selectedAnswer) => {
      dispatch({ 
        type: QUIZ_ACTIONS.SELECT_ANSWER, 
        payload: { questionIndex, selectedAnswer } 
      });
    },

    // Navigate to next question
    nextQuestion: () => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        const nextIndex = state.currentQuestionIndex + 1;
        dispatch({ type: QUIZ_ACTIONS.SET_CURRENT_QUESTION, payload: nextIndex });
      }
    },

    // Navigate to previous question
    previousQuestion: () => {
      if (state.currentQuestionIndex > 0) {
        const prevIndex = state.currentQuestionIndex - 1;
        dispatch({ type: QUIZ_ACTIONS.SET_CURRENT_QUESTION, payload: prevIndex });
      }
    },

    // Submit quiz
    submitQuiz: () => {
      dispatch({ type: QUIZ_ACTIONS.SUBMIT_QUIZ });
    },

    // Reset quiz to start over
    resetQuiz: () => {
      dispatch({ type: QUIZ_ACTIONS.RESET_QUIZ });
    },

    // Handle timer expiry
    handleTimerExpiry: () => {
      dispatch({ type: QUIZ_ACTIONS.SUBMIT_QUIZ });
    }
  };

  // Derived state calculations
  const derivedState = {
    currentQuestion: state.questions[state.currentQuestionIndex],
    totalQuestions: state.questions.length,
    answeredQuestions: Object.keys(state.userAnswers).length,
    isCurrentQuestionAnswered: state.userAnswers.hasOwnProperty(state.currentQuestionIndex),
    completionPercentage: state.questions.length > 0 
      ? Math.round((Object.keys(state.userAnswers).length / state.questions.length) * 100)
      : 0,
    canGoNext: state.currentQuestionIndex < state.questions.length - 1,
    canGoPrevious: state.currentQuestionIndex > 0
  };

  // Context value
  const contextValue = {
    ...state,
    ...derivedState,
    ...actions
  };

  return (
    <QuizContext.Provider value={contextValue}>
      {children}
    </QuizContext.Provider>
  );
};

// Custom hook to use Quiz Context
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

export default QuizContext;
