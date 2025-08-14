import { useState, useEffect } from 'react';

// Custom hook to fetch quiz data from Open Trivia Database
const useQuizData = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to shuffle an array using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Function to decode HTML entities
  const decodeHTML = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        console.log('Fetching quiz data...');
        setLoading(true);
        setError(null);

        // Try fetching from API with retry logic
        let response;
        let retryCount = 0;
        const maxRetries = 3;

        while (retryCount < maxRetries) {
          try {
            response = await fetch('https://opentdb.com/api.php?amount=15');
            
            if (response.ok) {
              const data = await response.json();
              
              if (data.response_code === 0) {
                // Success - process the data
                const processedQuestions = data.results.map((question, index) => {
                  const decodedQuestion = decodeHTML(question.question);
                  const decodedCorrectAnswer = decodeHTML(question.correct_answer);
                  const decodedIncorrectAnswers = question.incorrect_answers.map(answer => decodeHTML(answer));
                  const allChoices = [decodedCorrectAnswer, ...decodedIncorrectAnswers];
                  const shuffledChoices = shuffleArray(allChoices);

                  return {
                    id: index,
                    question: decodedQuestion,
                    choices: shuffledChoices,
                    correctAnswer: decodedCorrectAnswer,
                    category: question.category,
                    difficulty: question.difficulty,
                    type: question.type
                  };
                });

                setQuestions(processedQuestions);
                return; // Success, exit the function
              } else {
                // API returned error code, try next iteration or fall through to fallback
                console.log(`API error response: ${data.response_code}`);
                retryCount++;
                if (retryCount >= maxRetries) break;
                continue;
              }
            } else if (response.status === 429) {
              // Rate limited - wait and retry
              retryCount++;
              if (retryCount < maxRetries) {
                console.log(`Rate limited. Retrying in ${retryCount * 2} seconds...`);
                await new Promise(resolve => setTimeout(resolve, retryCount * 2000));
                continue;
              } else {
                console.log('Rate limit exceeded, using fallback');
                break;
              }
            } else {
              console.log(`HTTP error: ${response.status}`);
              retryCount++;
              if (retryCount >= maxRetries) break;
              continue;
            }
          } catch (fetchError) {
            retryCount++;
            if (retryCount < maxRetries && fetchError.message.includes('fetch')) {
              console.log(`Network error. Retrying in ${retryCount * 2} seconds...`);
              await new Promise(resolve => setTimeout(resolve, retryCount * 2000));
              continue;
            } else {
              console.log('Fetch error, breaking to use fallback');
              break;
            }
          }
        }

        // If we reach here, all retries failed - use fallback data
        console.log('API unavailable after retries, using fallback questions');
        // Fall through to catch block to use fallback data

      } catch (err) {
        console.log('API failed, using fallback questions:', err.message);
        
        // Use fallback questions when API fails
        const fallbackQuestions = [
          {
            id: 0,
            question: "What does HTML stand for?",
            choices: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "HyperText Make Language"],
            correctAnswer: "HyperText Markup Language",
            category: "Science: Computers",
            difficulty: "easy",
            type: "multiple"
          },
          {
            id: 1,
            question: "Which of the following is a JavaScript framework?",
            choices: ["React", "HTML", "CSS", "SQL"],
            correctAnswer: "React",
            category: "Science: Computers",
            difficulty: "easy",
            type: "multiple"
          },
          {
            id: 2,
            question: "What does CSS stand for?",
            choices: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
            correctAnswer: "Cascading Style Sheets",
            category: "Science: Computers",
            difficulty: "easy",
            type: "multiple"
          },
          {
            id: 3,
            question: "JavaScript is a compiled language.",
            choices: ["False", "True"],
            correctAnswer: "False",
            category: "Science: Computers",
            difficulty: "medium",
            type: "boolean"
          },
          {
            id: 4,
            question: "Which HTTP method is used to update data?",
            choices: ["PUT", "GET", "DELETE", "POST"],
            correctAnswer: "PUT",
            category: "Science: Computers",
            difficulty: "medium",
            type: "multiple"
          },
          {
            id: 5,
            question: "What is the default port for HTTP?",
            choices: ["80", "443", "8080", "3000"],
            correctAnswer: "80",
            category: "Science: Computers",
            difficulty: "medium",
            type: "multiple"
          },
          {
            id: 6,
            question: "Which database is known as a NoSQL database?",
            choices: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
            correctAnswer: "MongoDB",
            category: "Science: Computers",
            difficulty: "medium",
            type: "multiple"
          },
          {
            id: 7,
            question: "Git is a version control system.",
            choices: ["True", "False"],
            correctAnswer: "True",
            category: "Science: Computers",
            difficulty: "easy",
            type: "boolean"
          },
          {
            id: 8,
            question: "What does API stand for?",
            choices: ["Application Programming Interface", "Advanced Programming Interface", "Application Process Interface", "Advanced Process Interface"],
            correctAnswer: "Application Programming Interface",
            category: "Science: Computers",
            difficulty: "easy",
            type: "multiple"
          },
          {
            id: 9,
            question: "Which of these is NOT a programming language?",
            choices: ["HTML", "Python", "JavaScript", "Java"],
            correctAnswer: "HTML",
            category: "Science: Computers",
            difficulty: "easy",
            type: "multiple"
          },
          {
            id: 10,
            question: "React uses a virtual DOM.",
            choices: ["True", "False"],
            correctAnswer: "True",
            category: "Science: Computers",
            difficulty: "medium",
            type: "boolean"
          },
          {
            id: 11,
            question: "Which company developed TypeScript?",
            choices: ["Microsoft", "Google", "Facebook", "Apple"],
            correctAnswer: "Microsoft",
            category: "Science: Computers",
            difficulty: "medium",
            type: "multiple"
          },
          {
            id: 12,
            question: "What does SQL stand for?",
            choices: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "Sequential Query Language"],
            correctAnswer: "Structured Query Language",
            category: "Science: Computers",
            difficulty: "easy",
            type: "multiple"
          },
          {
            id: 13,
            question: "Node.js is primarily used for backend development.",
            choices: ["True", "False"],
            correctAnswer: "True",
            category: "Science: Computers",
            difficulty: "easy",
            type: "boolean"
          },
          {
            id: 14,
            question: "Which HTTP status code indicates 'Not Found'?",
            choices: ["404", "200", "500", "301"],
            correctAnswer: "404",
            category: "Science: Computers",
            difficulty: "medium",
            type: "multiple"
          }
        ];

        // Shuffle the fallback questions for variety
        const shuffledFallback = fallbackQuestions.map(q => ({
          ...q,
          choices: shuffleArray([...q.choices])
        }));

        setQuestions(shuffledFallback);
        setError(null); // Don't show error since we have working fallback data
      } finally {
        setLoading(false);
      }
    };

    fetchQuizData();
  }, []);

  return { questions, loading, error };
};

export default useQuizData;
