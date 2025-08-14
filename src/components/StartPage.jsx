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
      {/* Enhanced floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/6 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-particle-float"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-hologram"></div>
        <div className="absolute top-1/6 right-1/3 w-24 h-24 bg-gradient-to-r from-emerald-400/25 to-teal-500/25 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-gradient-to-r from-fuchsia-400/20 to-violet-500/20 rounded-full blur-3xl animate-float"></div>
      </div>
      
      {/* Matrix-style background effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400 text-xs font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {Math.random() > 0.5 ? '01' : '10'}
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-br from-slate-900/90 via-blue-900/90 to-purple-900/90 backdrop-blur-2xl p-12 rounded-3xl shadow-[0_35px_80px_rgba(0,0,0,0.9)] w-full max-w-2xl border-2 border-cyan-400/40 relative overflow-hidden z-10 animate-hologram">
        {/* Neon border animation */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/40 via-blue-500/40 to-purple-500/40 p-[2px] animate-neon-border">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95 w-full h-full"></div>
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-8 left-8 w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-6 right-6 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        
        <div className="relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-8 animate-float relative">
              🧠
              <div className="absolute inset-0 text-8xl animate-pulse opacity-60">✨</div>
              <div className="absolute -top-2 -right-2 text-3xl animate-bounce">⚡</div>
            </div>
            <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 animate-glow">
              CausalFunnel Quiz
            </h1>
            <p className="text-cyan-200 text-2xl font-semibold mb-2">Software Engineer Intern Assessment</p>
            <p className="text-blue-300 text-lg opacity-80">Powered by Advanced AI Technology</p>
            <div className="w-40 h-2 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 mx-auto mt-8 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-glow"></div>
          </div>

          {/* Enhanced Instructions */}
          <div className="bg-gradient-to-br from-slate-800/80 to-blue-900/60 backdrop-blur-lg p-10 rounded-2xl mb-10 border-2 border-cyan-400/30 relative overflow-hidden animate-neon-flicker">
            {/* Enhanced Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -skew-x-12 -translate-x-full animate-shimmer"></div>
            
            <h3 className="font-bold text-cyan-300 mb-6 flex items-center text-2xl">
              <span className="mr-4 text-3xl animate-bounce">📋</span>
              Quiz Instructions
              <div className="ml-auto w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
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

          {/* Enhanced Email Form */}
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="relative">
              <label htmlFor="email" className="block text-xl font-bold text-cyan-300 mb-6 flex items-center">
                <span className="mr-4 text-2xl animate-pulse">📧</span>
                Email Address
                <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email address"
                  className={`w-full px-8 py-6 border-2 rounded-2xl focus:ring-4 transition-all duration-500 text-xl bg-slate-800/80 backdrop-blur-lg text-white placeholder-cyan-300/60 font-medium ${
                    emailError 
                      ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20' 
                      : 'border-cyan-400/50 focus:border-cyan-400 focus:ring-cyan-400/20'
                  } shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(34,211,238,0.2)] hover:border-cyan-400/70`}
                />
                {/* Input glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-blue-500/10 -z-10 blur-xl"></div>
              </div>
              {emailError && (
                <p className="mt-6 text-lg text-red-400 flex items-center bg-red-900/30 border border-red-400/40 p-6 rounded-xl backdrop-blur-sm animate-pulse">
                  <span className="mr-4 text-2xl">⚠️</span>
                  {emailError}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={!email.trim() || !validateEmail(email)}
              className={`w-full py-6 px-10 rounded-3xl font-black text-2xl transition-all duration-700 transform relative overflow-hidden group ${
                email.trim() && validateEmail(email)
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-600 via-purple-600 to-pink-600 hover:from-cyan-400 hover:via-blue-500 hover:via-purple-500 hover:to-pink-500 text-white shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:shadow-[0_0_60px_rgba(34,211,238,0.8)] hover:-translate-y-2 hover:scale-105 active:translate-y-0 active:scale-100 animate-glow'
                  : 'bg-gradient-to-r from-slate-700 to-slate-600 text-slate-400 cursor-not-allowed opacity-50'
              }`}
            >
              {/* Enhanced Button Effects */}
              {email.trim() && validateEmail(email) && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></div>
                </>
              )}
              <div className="relative flex items-center justify-center">
                {email.trim() && validateEmail(email) ? (
                  <>
                    <span className="mr-4 text-3xl animate-bounce">🚀</span>
                    Start Epic Quiz
                    <span className="ml-4 text-3xl animate-bounce" style={{animationDelay: '0.5s'}}>⚡</span>
                  </>
                ) : (
                  <>
                    <span className="mr-3 text-2xl">📧</span>
                    Enter Email to Continue
                  </>
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
