import { useQuiz } from '../context/QuizContext';

const ReportPage = () => {
  const { questions, quizResults, userEmail, resetQuiz } = useQuiz();
  // Calculate score and statistics
  const calculateResults = () => {
    let correctAnswers = 0;
    const totalQuestions = questions.length;
    const answeredQuestions = Object.keys(quizResults.userAnswers).length;

    // Check each answered question
    Object.entries(quizResults.userAnswers).forEach(([questionIndex, userAnswer]) => {
      const question = questions[parseInt(questionIndex)];
      if (question && userAnswer === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const score = Math.round((correctAnswers / totalQuestions) * 100);
    const accuracy = answeredQuestions > 0 ? Math.round((correctAnswers / answeredQuestions) * 100) : 0;

    return {
      correctAnswers,
      totalQuestions,
      answeredQuestions,
      unansweredQuestions: totalQuestions - answeredQuestions,
      score,
      accuracy
    };
  };

  const results = calculateResults();

  // Get score color and message
  const getScoreInfo = (score) => {
    if (score >= 80) {
      return { color: 'text-green-600', bgColor: 'bg-green-100', message: 'Excellent! 🎉', emoji: '🌟' };
    } else if (score >= 60) {
      return { color: 'text-blue-600', bgColor: 'bg-blue-100', message: 'Good job! 👍', emoji: '👏' };
    } else if (score >= 40) {
      return { color: 'text-yellow-600', bgColor: 'bg-yellow-100', message: 'Not bad! 📚', emoji: '💪' };
    } else {
      return { color: 'text-red-600', bgColor: 'bg-red-100', message: 'Keep studying! 📖', emoji: '🎯' };
    }
  };

  const scoreInfo = getScoreInfo(results.score);

  // Format timestamp
  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-b border-cyan-400/30 relative overflow-hidden">
        {/* Animated Header Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-500/5 to-purple-500/5 animate-pulse"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-4 right-8 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-4 left-8 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70 animation-delay-500"></div>
        
        <div className="max-w-6xl mx-auto px-8 py-12 relative z-10">
          <div className="text-center">
            <div className="text-8xl mb-6 animate-bounce relative">
              {scoreInfo.emoji}
              <div className="absolute inset-0 text-8xl animate-pulse opacity-50">✨</div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4 animate-pulse">
              Quiz Results
            </h1>
            <p className="text-cyan-200 text-xl">Assessment completed for <span className="font-bold text-white">{userEmail}</span></p>
            <p className="text-sm text-cyan-300/70 mt-3">Submitted on {formatTimestamp(quizResults.submittedAt)}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Score Summary */}
        <div className="bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-xl p-12 rounded-3xl mb-12 text-center shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-cyan-400/30 relative overflow-hidden">
          {/* Neon Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 p-[1px] animate-pulse">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95 w-full h-full"></div>
          </div>
          
          {/* Floating Orbs */}
          <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse animation-delay-500"></div>
          
          <div className="relative z-10">
            <div className="text-9xl mb-8 animate-bounce">{scoreInfo.emoji}</div>
            <div className="text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 animate-glow">
              {results.score}%
            </div>
            <div className="text-3xl text-cyan-300 font-bold mb-10">
              {scoreInfo.message}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-gradient-to-br from-green-900/60 to-emerald-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-green-400/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full animate-shimmer"></div>
                <div className="text-4xl font-bold text-green-400 mb-3 relative z-10">{results.correctAnswers}</div>
                <div className="text-sm text-green-300 font-medium relative z-10">Correct</div>
              </div>
              <div className="bg-gradient-to-br from-red-900/60 to-pink-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-red-400/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full animate-shimmer animation-delay-300"></div>
                <div className="text-4xl font-bold text-red-400 mb-3 relative z-10">{results.totalQuestions - results.correctAnswers}</div>
                <div className="text-sm text-red-300 font-medium relative z-10">Incorrect</div>
              </div>
              <div className="bg-gradient-to-br from-blue-900/60 to-cyan-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-400/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full animate-shimmer animation-delay-600"></div>
                <div className="text-4xl font-bold text-blue-400 mb-3 relative z-10">{results.answeredQuestions}</div>
                <div className="text-sm text-blue-300 font-medium relative z-10">Answered</div>
              </div>
              <div className="bg-gradient-to-br from-orange-900/60 to-yellow-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-orange-400/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full animate-shimmer animation-delay-1000"></div>
                <div className="text-4xl font-bold text-orange-400 mb-3 relative z-10">{results.unansweredQuestions}</div>
                <div className="text-sm text-orange-300 font-medium relative z-10">Skipped</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-xl rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-cyan-400/30 relative overflow-hidden">
          {/* Neon Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 p-[1px] animate-pulse">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95 w-full h-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="p-10 border-b border-cyan-400/20">
              <h2 className="text-4xl font-bold text-cyan-300 flex items-center">
                <span className="mr-4 text-4xl">📝</span>
                Detailed Review
              </h2>
              <p className="text-cyan-200 text-xl mt-3">Review each question, your answer, and the correct answer</p>
            </div>

            <div className="p-10 space-y-8">
              {questions.map((question, index) => {
                const userAnswer = quizResults.userAnswers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                const wasAnswered = userAnswer !== undefined;

                return (
                  <div key={index} className="bg-gradient-to-br from-slate-800/60 to-blue-900/40 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/20 shadow-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-500 relative overflow-hidden">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Question Header */}
                    <div className="flex items-start justify-between mb-6 relative z-10">
                      <div className="flex items-center space-x-4">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-xl font-bold rounded-full w-14 h-14 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                          {index + 1}
                        </span>
                        <div className={`px-6 py-3 rounded-full text-lg font-bold shadow-lg backdrop-blur-sm ${
                          !wasAnswered 
                            ? 'bg-gray-700/60 text-gray-300 border border-gray-500/40'
                            : isCorrect 
                            ? 'bg-green-900/60 text-green-300 border border-green-400/40 shadow-[0_0_15px_rgba(34,197,94,0.3)]' 
                            : 'bg-red-900/60 text-red-300 border border-red-400/40 shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                        }`}>
                          {!wasAnswered ? '⏭️ Skipped' : isCorrect ? '✅ Correct' : '❌ Incorrect'}
                        </div>
                      </div>
                      {question.difficulty && (
                        <div className={`px-5 py-3 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm border ${
                          question.difficulty === 'easy' 
                            ? 'bg-green-900/60 text-green-300 border-green-400/40'
                            : question.difficulty === 'medium'
                            ? 'bg-yellow-900/60 text-yellow-300 border-yellow-400/40'
                            : 'bg-red-900/60 text-red-300 border-red-400/40'
                        }`}>
                          📊 {question.difficulty.toUpperCase()}
                        </div>
                      )}
                    </div>

                    {/* Question Text */}
                    <div className="mb-8 relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-4 leading-relaxed">
                        {question.question}
                      </h3>
                      {question.category && (
                        <p className="text-lg text-cyan-200 bg-slate-800/40 backdrop-blur-sm px-5 py-3 rounded-xl inline-block border border-cyan-400/20">
                          🏷️ Category: <span className="font-semibold text-white">{question.category}</span>
                        </p>
                      )}
                    </div>

                    {/* Answers Comparison */}
                    <div className="grid md:grid-cols-2 gap-8 relative z-10">
                      {/* User's Answer */}
                      <div className={`p-6 rounded-2xl border-2 shadow-xl backdrop-blur-sm transition-all duration-500 ${
                        !wasAnswered 
                          ? 'border-gray-500/40 bg-gray-800/40'
                          : isCorrect 
                          ? 'border-green-400/60 bg-green-900/40 shadow-[0_0_20px_rgba(34,197,94,0.2)]' 
                          : 'border-red-400/60 bg-red-900/40 shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                      }`}>
                        <div className="flex items-center mb-4">
                          <span className={`text-lg font-bold ${
                            !wasAnswered 
                              ? 'text-gray-300'
                              : isCorrect 
                              ? 'text-green-300' 
                              : 'text-red-300'
                          }`}>
                            👤 Your Answer
                          </span>
                          {wasAnswered && (
                            <span className="ml-4 text-2xl">
                              {isCorrect ? '✅' : '❌'}
                            </span>
                          )}
                        </div>
                        <div className={`text-xl font-semibold ${
                          !wasAnswered 
                            ? 'text-gray-400 italic'
                            : isCorrect 
                            ? 'text-green-200' 
                            : 'text-red-200'
                        }`}>
                          {wasAnswered ? userAnswer : 'No answer provided'}
                        </div>
                      </div>

                      {/* Correct Answer */}
                      <div className="p-6 rounded-2xl border-2 border-green-400/60 bg-green-900/40 shadow-xl backdrop-blur-sm shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                        <div className="flex items-center mb-4">
                          <span className="text-lg font-bold text-green-300">
                            ✅ Correct Answer
                          </span>
                        </div>
                        <div className="text-xl font-semibold text-green-200">
                          {question.correctAnswer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-16 text-center space-y-8">
          <button
            onClick={resetQuiz}
            className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white px-16 py-6 rounded-2xl text-2xl font-bold transition-all duration-500 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:-translate-y-2 active:translate-y-0 relative overflow-hidden"
          >
            {/* Button Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative flex items-center justify-center">
              🔄 Take Quiz Again
            </span>
          </button>
          
          <div className="p-8 bg-gradient-to-r from-slate-900/60 to-blue-900/40 backdrop-blur-sm rounded-2xl border border-cyan-400/30 shadow-xl">
            <p className="text-cyan-200 text-xl leading-relaxed">
              🎉 Thank you for completing the <span className="font-bold text-cyan-400 animate-pulse">CausalFunnel</span> assessment! 
              Your performance has been recorded and will be reviewed by our team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
