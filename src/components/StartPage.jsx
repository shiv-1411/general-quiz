import { useState } from 'react';
import { useQuiz } from '../context/QuizContext';

const StartPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const { startQuiz, error } = useQuiz();

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    // Clear error when user starts typing
    if (emailError) {
      setEmailError('');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    startQuiz(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-xl p-10 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] w-full max-w-lg border border-cyan-400/30 relative overflow-hidden z-10">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 p-[1px] animate-pulse">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95 w-full h-full"></div>
        </div>
        
        <div className="absolute top-6 right-6 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70 animation-delay-500"></div>
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="text-7xl mb-6 animate-bounce relative">
              🧠
              <div className="absolute inset-0 text-7xl animate-pulse opacity-50">✨</div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4 animate-pulse">
              CausalFunnel Quiz
            </h1>
            <p className="text-cyan-200 text-xl font-medium">Software Engineer Intern Assessment</p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
          </div>

          {/* Instructions */}
          <div className="bg-gradient-to-br from-slate-800/60 to-blue-900/40 backdrop-blur-sm p-8 rounded-2xl mb-8 border border-cyan-400/20 relative overflow-hidden">
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full animate-shimmer"></div>
            
            <h3 className="font-bold text-cyan-300 mb-4 flex items-center text-lg">
              <span className="mr-3 text-2xl">📋</span>
              Quiz Instructions
            </h3>
            <ul className="text-sm text-cyan-100 space-y-3">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-4 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></span>
                15 questions total
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-4 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></span>
                30 minutes time limit
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-4 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></span>
                Navigate between questions freely
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-4 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></span>
                Submit anytime or auto-submit when timer ends
              </li>
            </ul>
          </div>

          {/* API Status Notification */}
          {error && (
            <div className="bg-gradient-to-r from-orange-900/40 to-yellow-900/40 border border-orange-400/30 p-6 rounded-2xl mb-8 backdrop-blur-sm">
              <div className="flex items-start">
                <div className="text-orange-400 mr-4 text-2xl">💡</div>
                <div>
                  <h4 className="font-bold text-orange-300 mb-2 text-lg">Demo Mode Active</h4>
                  <p className="text-sm text-orange-200 leading-relaxed">
                    Using sample questions due to API rate limiting. 
                    Perfect for demonstrating the quiz functionality!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="email" className="block text-lg font-bold text-cyan-300 mb-4 flex items-center">
                <span className="mr-3 text-xl">📧</span>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email address"
                className={`w-full px-6 py-4 border-2 rounded-2xl focus:ring-4 transition-all duration-500 text-lg bg-slate-800/50 backdrop-blur-sm text-white placeholder-cyan-300/50 ${
                  emailError 
                    ? 'border-red-400/50 focus:ring-red-400/20 focus:border-red-400' 
                    : 'border-cyan-400/30 hover:border-cyan-400/50 focus:border-cyan-400 focus:ring-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                }`}
              />
              {emailError && (
                <p className="mt-4 text-sm text-red-400 flex items-center bg-red-900/20 border border-red-400/30 p-4 rounded-xl backdrop-blur-sm">
                  <span className="mr-3 text-lg">⚠️</span>
                  {emailError}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={!email.trim() || !validateEmail(email)}
              className={`w-full py-5 px-8 rounded-2xl font-bold text-xl transition-all duration-500 transform relative overflow-hidden ${
                email.trim() && validateEmail(email)
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:-translate-y-1 active:translate-y-0'
                  : 'bg-gradient-to-r from-slate-700 to-slate-600 text-slate-400 cursor-not-allowed'
              }`}
            >
              {/* Button Shimmer Effect */}
              {email.trim() && validateEmail(email) && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
              )}
              <div className="relative flex items-center justify-center">
                {email.trim() && validateEmail(email) ? (
                  <>
                    Start Quiz
                    <span className="ml-3 text-2xl animate-bounce">🚀</span>
                  </>
                ) : (
                  'Enter Email to Continue'
                )}
              </div>
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-10 text-cyan-300">
            <p className="text-lg font-medium">Good luck with your assessment!</p>
            <div className="flex justify-center items-center mt-4 space-x-3 text-2xl">
              <span className="animate-pulse">💪</span>
              <span className="animate-pulse animation-delay-300">🎯</span>
              <span className="animate-pulse animation-delay-600">✨</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
