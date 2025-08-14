import { useQuiz } from '../context/QuizContext';

const OverviewPanel = () => {
  const {
    totalQuestions,
    currentQuestionIndex,
    visitedQuestions,
    userAnswers,
    navigateToQuestion
  } = useQuiz();

  // Convert userAnswers object keys to Set of numbers for easy checking
  const answeredQuestions = new Set(Object.keys(userAnswers).map(Number));
  // Generate array of question numbers
  const questionNumbers = Array.from({ length: totalQuestions }, (_, i) => i);

  // Determine the status of each question
  const getQuestionStatus = (questionIndex) => {
    const isCurrentQuestion = questionIndex === currentQuestionIndex;
    const isVisited = visitedQuestions.has(questionIndex);
    const isAnswered = answeredQuestions.has(questionIndex);

    if (isCurrentQuestion) {
      return 'current';
    } else if (isAnswered) {
      return 'answered';
    } else if (isVisited) {
      return 'visited';
    } else {
      return 'unvisited';
    }
  };

  // Get styling classes based on question status
  const getQuestionClasses = (questionIndex) => {
    const status = getQuestionStatus(questionIndex);
    const baseClasses = 'w-14 h-14 rounded-2xl font-bold text-lg transition-all cursor-pointer hover:scale-110 shadow-lg relative';

    switch (status) {
      case 'current':
        return `${baseClasses} bg-gradient-to-r from-cyan-400 to-blue-500 text-black ring-2 ring-cyan-300 shadow-2xl scale-110`;
      case 'answered':
        return `${baseClasses} bg-gradient-to-r from-green-400 to-emerald-500 text-black hover:from-green-500 hover:to-emerald-600 shadow-xl`;
      case 'visited':
        return `${baseClasses} bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:from-yellow-500 hover:to-orange-500 shadow-lg`;
      case 'unvisited':
      default:
        return `${baseClasses} bg-gradient-to-r from-slate-700 to-slate-600 text-cyan-300 hover:from-slate-600 hover:to-slate-500 hover:text-cyan-200 border border-slate-500`;
    }
  };

  // Calculate statistics
  const visitedCount = visitedQuestions.size;
  const answeredCount = answeredQuestions.size;
  const completionPercentage = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <div className="bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl h-fit sticky top-6 border border-cyan-400/30 relative overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
      
      {/* Neon Border Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 p-[2px]">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95 w-full h-full"></div>
      </div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-cyan-300 mb-8 flex items-center">
          <span className="mr-3 text-2xl">📊</span>
          Quiz Overview
        </h3>
      
      {/* Statistics */}
      <div className="mb-10 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-slate-800/50 to-blue-800/50 backdrop-blur-sm p-4 rounded-xl border border-cyan-400/20">
            <div className="text-sm text-cyan-300 font-medium">Progress:</div>
            <div className="text-xl font-bold text-white">{answeredCount}/{totalQuestions}</div>
          </div>
          <div className="bg-gradient-to-r from-slate-800/50 to-blue-800/50 backdrop-blur-sm p-4 rounded-xl border border-cyan-400/20">
            <div className="text-sm text-cyan-300 font-medium">Completion:</div>
            <div className="text-xl font-bold text-green-400">{completionPercentage}%</div>
          </div>
        </div>
        <div className="relative">
          <div className="w-full bg-slate-700/50 rounded-full h-4 shadow-inner border border-slate-600/50">
            <div
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-4 rounded-full transition-all duration-500 shadow-lg relative"
              style={{ width: `${completionPercentage}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Question Grid */}
      <div className="grid grid-cols-5 gap-4 mb-10">
        {questionNumbers.map((questionIndex) => (
          <button
            key={questionIndex}
            onClick={() => navigateToQuestion(questionIndex)}
            className={getQuestionClasses(questionIndex)}
            title={`Question ${questionIndex + 1} - ${getQuestionStatus(questionIndex)}`}
          >
            {/* Neon Glow Effect for Current Question */}
            {getQuestionStatus(questionIndex) === 'current' && (
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
            )}
            {getQuestionStatus(questionIndex) === 'answered' && (
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur-md opacity-30"></div>
            )}
            <span className="relative z-10">{questionIndex + 1}</span>
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="border-t pt-6">
        <h4 className="text-sm font-bold text-gray-700 mb-4 flex items-center">
          <span className="mr-2">🎨</span>
          Legend
        </h4>
        <div className="space-y-3 text-xs">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-3 shadow-sm"></div>
            <span className="text-gray-600 font-medium">Current Question</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mr-3 shadow-sm"></div>
            <span className="text-gray-600 font-medium">Answered</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg mr-3 shadow-sm"></div>
            <span className="text-gray-600 font-medium">Visited</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 bg-gray-200 rounded-lg mr-3"></div>
            <span className="text-gray-600 font-medium">Not Visited</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="border-t border-cyan-400/20 pt-8 mt-8">
        <h4 className="text-lg font-bold text-cyan-300 mb-4 flex items-center">
          <span className="mr-3 text-xl">💡</span>
          Quick Tips
        </h4>
        <div className="text-sm text-cyan-100 space-y-3 leading-relaxed">
          <div className="flex items-start bg-gradient-to-r from-slate-800/30 to-blue-800/30 p-3 rounded-lg">
            <span className="mr-3 text-cyan-400">•</span>
            <span>Click any number to jump to that question</span>
          </div>
          <div className="flex items-start bg-gradient-to-r from-slate-800/30 to-blue-800/30 p-3 rounded-lg">
            <span className="mr-3 text-green-400">•</span>
            <span>Green indicates answered questions</span>
          </div>
          <div className="flex items-start bg-gradient-to-r from-slate-800/30 to-blue-800/30 p-3 rounded-lg">
            <span className="mr-3 text-yellow-400">•</span>
            <span>Make sure to answer all questions before submitting</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default OverviewPanel;
