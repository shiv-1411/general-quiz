import { useState } from 'react';
import { useQuiz } from '../context/QuizContext';
import Timer from './Timer';
import Question from './Question';
import OverviewPanel from './OverviewPanel';

const QuizPage = () => {
  const {
    userEmail,
    currentQuestion,
    currentQuestionIndex,
    questions,
    userAnswers,
    visitedQuestions,
    totalQuestions,
    answeredQuestions,
    canGoNext,
    canGoPrevious,
    nextQuestion,
    previousQuestion,
    submitQuiz,
    navigateToQuestion,
    handleTimerExpiry
  } = useQuiz();

  // State for quiz submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle quiz submission
  const handleSubmit = () => {
    if (isSubmitted) return;
    
    setIsSubmitted(true);
    submitQuiz();
  };

  // Handle timer expiry (auto-submit)
  const handleTimerExpiryLocal = () => {
    if (!isSubmitted) {
      setIsSubmitted(true);
      handleTimerExpiry();
    }
  };

  // Prevent submission during processing
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>
        
        <div className="text-center bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-xl p-12 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-cyan-400/30 relative overflow-hidden">
          {/* Neon Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 p-[1px] animate-pulse">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95 w-full h-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-6 shadow-[0_0_30px_rgba(34,211,238,0.4)]"></div>
            <p className="text-2xl text-cyan-300 font-medium">Submitting your quiz...</p>
            <p className="text-lg text-cyan-200 mt-3">Please wait while we process your results</p>
          </div>
        </div>
      </div>
    );
  }

  const isAnswered = userAnswers.hasOwnProperty(currentQuestionIndex);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Enhanced Header with impressive design */}
      <div className="bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] border-b border-cyan-400/30 relative overflow-hidden">
        {/* Multiple animated background layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-500/5 to-purple-500/5 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-purple-500/3 via-pink-500/3 to-cyan-500/3 animate-pulse animation-delay-1000"></div>
        
        {/* Enhanced floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-6 right-12 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-8 left-16 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70 animation-delay-500"></div>
          <div className="absolute bottom-6 right-20 w-2.5 h-2.5 bg-purple-400 rounded-full animate-ping opacity-50 animation-delay-1000"></div>
          <div className="absolute bottom-8 left-24 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-60 animation-delay-1500"></div>
        </div>
        
        {/* Mesh pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className="absolute top-4 right-8 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-4 left-8 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-70 animation-delay-500"></div>
        
        <div className="max-w-7xl mx-auto px-8 py-8 relative z-10">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                CausalFunnel Quiz
              </h1>
              <p className="text-cyan-200 mt-2 flex items-center text-lg">
                <span className="mr-3 text-xl">👋</span>
                Welcome, <span className="font-bold ml-2 text-white">{userEmail}</span>
              </p>
            </div>
            <div className="flex items-center space-x-10">
              <div className="text-center bg-gradient-to-br from-slate-800/60 to-blue-900/40 backdrop-blur-sm p-4 rounded-xl border border-cyan-400/20">
                <div className="text-sm text-cyan-300 mb-2 font-medium">Progress</div>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold text-cyan-400">{answeredQuestions}/{totalQuestions}</div>
                  <div className="w-32 bg-slate-700/60 rounded-full h-3 border border-cyan-400/30">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                      style={{ width: `${(answeredQuestions / totalQuestions) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <Timer onTimerExpiry={handleTimerExpiryLocal} />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Content Area */}
      <div className="max-w-7xl mx-auto px-8 py-12 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
          {/* Main Quiz Area */}
          <div className="lg:col-span-3 space-y-12">
            {/* Question Component with enhanced container */}
            <div className="relative">
              <Question />
              
              {/* Decorative elements around question */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-lg"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400/50 rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400/50 rounded-bl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400/50 rounded-br-lg"></div>
            </div>

            {/* Enhanced Navigation Controls */}
            <div className="bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-xl p-12 rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.8)] border border-cyan-400/30 relative overflow-hidden">
              {/* Multiple layer neon effects */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 p-[1px] animate-pulse">
                <div className="rounded-3xl bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95 w-full h-full"></div>
              </div>
              
              {/* Floating orbs */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse animation-delay-500"></div>
              
              <div className="flex justify-between items-center relative z-10 space-x-8">
                <button
                  onClick={previousQuestion}
                  disabled={!canGoPrevious}
                  className={`px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-500 flex items-center relative overflow-hidden magnetic-btn ${
                    !canGoPrevious
                      ? 'bg-slate-700/40 text-slate-400 cursor-not-allowed border border-slate-600/40'
                      : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white shadow-[0_0_20px_rgba(100,116,139,0.4)] hover:shadow-[0_0_30px_rgba(100,116,139,0.6)] hover:-translate-y-1 active:translate-y-0 border border-slate-500/40'
                  }`}
                >
                  <span className="mr-2">←</span>
                  Previous
                </button>

                <div className="flex space-x-4">
                  <button
                    onClick={nextQuestion}
                    disabled={!canGoNext}
                    className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center ${
                      !canGoNext
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95'
                    }`}
                  >
                    Next
                    <span className="ml-2">→</span>
                  </button>

                  <button
                    onClick={handleSubmit}
                    className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center"
                  >
                    <span className="mr-2">✓</span>
                    Submit Quiz
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Panel */}
          <div className="lg:col-span-1">
            <OverviewPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
