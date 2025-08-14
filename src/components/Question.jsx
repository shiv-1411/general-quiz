import { useQuiz } from '../context/QuizContext';

const Question = () => {
  const {
    questions,
    currentQuestionIndex,
    userAnswers,
    totalQuestions,
    selectAnswer
  } = useQuiz();

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-cyan-400/30">
        <div className="text-center text-cyan-300">
          Loading question...
        </div>
      </div>
    );
  }

  const handleChoiceClick = (choice) => {
    selectAnswer(currentQuestionIndex, choice);
  };

  const getChoiceLabel = (index) => {
    return String.fromCharCode(65 + index);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-xl p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-cyan-400/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-70"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-60 animation-delay-300"></div>
        <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-50 animation-delay-600"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-500/5 to-purple-500/5 animate-pulse"></div>
      
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 p-[1px] animate-pulse">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95 w-full h-full"></div>
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse animation-delay-500"></div>
      
      <div className="relative z-10">
        <div className="mb-10">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 rounded-2xl text-lg font-bold shadow-2xl">
                  <span className="flex items-center">
                    <span className="mr-3 text-2xl">❓</span>
                    Question {currentQuestionIndex + 1} of {totalQuestions}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-xl opacity-50 -z-10 animate-pulse"></div>
              </div>
              {currentQuestion.difficulty && (
                <div className={`relative px-6 py-3 rounded-2xl text-lg font-bold shadow-2xl ${
                  currentQuestion.difficulty === 'easy' 
                    ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-black'
                    : currentQuestion.difficulty === 'medium'
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black'
                    : 'bg-gradient-to-r from-red-400 to-pink-500 text-white'
                }`}>
                  {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
                  <div className={`absolute inset-0 rounded-2xl blur-xl opacity-50 -z-10 animate-pulse ${
                    currentQuestion.difficulty === 'easy' 
                      ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                      : currentQuestion.difficulty === 'medium'
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-400'
                      : 'bg-gradient-to-r from-red-400 to-pink-500'
                  }`}></div>
                </div>
              )}
            </div>
            {selectedAnswer && (
              <div className="relative bg-gradient-to-r from-green-400 to-emerald-500 text-black px-6 py-3 rounded-2xl font-bold flex items-center shadow-2xl">
                <span className="mr-2 text-xl">✓</span>
                Answered
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur-xl opacity-50 -z-10 animate-pulse"></div>
              </div>
            )}
          </div>

          {currentQuestion.category && (
            <div className="mb-8">
              <div className="relative inline-block">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-purple-400/40">
                  <div className="flex items-center text-cyan-300 font-medium text-lg">
                    <span className="mr-3 text-xl">🏷️</span>
                    Category: <span className="font-bold ml-2 text-white">{currentQuestion.category}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="relative mb-10">
            <div className="bg-gradient-to-r from-slate-800/50 to-blue-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/20">
              <h2 className="text-3xl font-bold text-white leading-relaxed">
                {currentQuestion.question}
              </h2>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-2xl blur-lg"></div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-cyan-300 mb-8 flex items-center">
            <span className="mr-3 text-2xl">🤔</span>
            Select your answer:
          </h3>
          
          {currentQuestion.choices.map((choice, index) => {
            const isSelected = selectedAnswer === choice;
            return (
              <button
                key={index}
                onClick={() => handleChoiceClick(choice)}
                className={`group relative w-full text-left p-8 rounded-3xl transition-all duration-700 ease-out transform hover:scale-[1.02] active:scale-[0.98] ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500/40 to-blue-600/40 border-2 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.6)] scale-[1.02]'
                    : 'bg-gradient-to-r from-slate-800/70 to-blue-900/50 border-2 border-slate-600/60 hover:border-cyan-400/70 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:bg-gradient-to-r hover:from-slate-700/80 hover:to-blue-800/60'
                } backdrop-blur-lg overflow-hidden cursor-pointer`}
                disabled={false}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {isSelected && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl blur-xl animate-pulse"></div>
                    <div className="absolute inset-[-2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-3xl opacity-60 animate-pulse blur-sm"></div>
                    <div className="absolute inset-[-4px] bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-cyan-400/30 rounded-3xl opacity-30 animate-ping"></div>
                  </>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out"></div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-active:opacity-100 transition-opacity duration-150"></div>
                
                <div className="relative flex items-center z-10">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-8 transition-all duration-700 relative shadow-2xl ${
                    isSelected
                      ? 'bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-600 text-black shadow-[0_0_25px_rgba(34,211,238,0.8)] animate-pulse scale-110'
                      : 'bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 text-cyan-300 group-hover:from-cyan-500/40 group-hover:via-blue-500/40 group-hover:to-cyan-500/40 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] group-hover:scale-110 group-active:scale-105'
                  }`}>
                    {getChoiceLabel(index)}
                    {isSelected && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-xl opacity-70 animate-pulse -z-10"></div>
                        <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-80 animate-spin -z-20" style={{animationDuration: '3s'}}></div>
                      </>
                    )}
                    {!isSelected && (
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    )}
                  </div>
                  
                  <div className={`flex-1 text-xl leading-relaxed py-4 font-medium transition-all duration-700 ${
                    isSelected ? 'text-white font-semibold text-shadow-lg' : 'text-cyan-100 group-hover:text-white group-hover:font-semibold'
                  }`}>
                    {choice}
                  </div>
                  
                  {isSelected && (
                    <div className="flex items-center space-x-3">
                      <div className="text-cyan-400 text-3xl animate-bounce transition-all duration-500">
                        ➤
                      </div>
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                    </div>
                  )}
                  
                  <div className={`text-cyan-400 text-2xl ml-6 transition-all duration-500 transform ${
                    isSelected ? 'opacity-0 scale-0' : 'opacity-0 group-hover:opacity-100 group-hover:scale-110'
                  }`}>
                    →
                  </div>
                </div>
                
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700 ${
                  isSelected ? 'w-full opacity-100' : 'w-0 group-hover:w-full opacity-60'
                }`}></div>
              </button>
            );
          })}
        </div>

        {selectedAnswer && (
          <div className="mt-10 p-8 bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-sm rounded-3xl border border-green-400/40 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
            <div className="flex items-center text-green-300 font-bold text-xl">
              <span className="mr-4 text-3xl animate-bounce">✓</span>
              <span className="font-bold text-cyan-300">Your answer:</span>
              <span className="ml-4 font-medium text-white text-2xl">{selectedAnswer}</span>
            </div>
            <div className="text-lg text-green-400 mt-4 flex items-center">
              <span className="mr-3 text-xl">💡</span>
              You can change your answer by clicking a different option.
            </div>
          </div>
        )}

        {currentQuestion.type && (
          <div className="mt-8 text-sm text-cyan-400 flex items-center">
            <span className="mr-3 text-lg">ℹ️</span>
            Question Type: {currentQuestion.type === 'multiple' ? 'Multiple Choice' : 'True/False'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
