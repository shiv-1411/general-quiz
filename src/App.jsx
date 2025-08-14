import { useQuiz } from './context/QuizContext';
import StartPage from './components/StartPage';
import QuizPage from './components/QuizPage';
import ReportPage from './components/ReportPage';
import BackgroundImage from './components/BackgroundImage';

function App() {
  console.log('App component rendering...');
  const { currentPage, loading } = useQuiz();
  console.log('App state:', { currentPage, loading });

  // Show enhanced loading state while fetching questions
  if (loading) {
    console.log('App showing loading state');
    return (
      <BackgroundImage colorOverlay="space" opacity={0.4} theme="tech" blur={3}>
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          </div>
          
          <div className="text-center bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-xl p-16 rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.8)] border border-cyan-400/30 relative overflow-hidden max-w-lg">
            {/* Neon border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 p-[1px] animate-pulse">
              <div className="rounded-3xl bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95 w-full h-full"></div>
            </div>
            
            <div className="relative z-10">
              {/* Enhanced loading spinner */}
              <div className="relative mb-8">
                <div className="w-24 h-24 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mx-auto shadow-[0_0_30px_rgba(34,211,238,0.4)]"></div>
                <div className="absolute inset-0 w-24 h-24 border-4 border-blue-400/20 border-b-blue-400 rounded-full animate-spin mx-auto animation-delay-500" style={{animationDirection: 'reverse'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
              </div>
              
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4 animate-pulse">
                Loading Quiz Questions
              </h2>
              <p className="text-xl text-cyan-200 mb-6">Fetching from Open Trivia Database...</p>
              
              {/* Enhanced loading dots */}
              <div className="flex justify-center space-x-3 mb-6">
                <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce animation-delay-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce animation-delay-600 shadow-[0_0_15px_rgba(147,51,234,0.5)]"></div>
              </div>
              
              <div className="text-cyan-400 text-sm animate-pulse">
                Preparing your assessment experience...
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    );
  }

  // Enhanced background props for different pages
  const getBackgroundProps = () => {
    switch (currentPage) {
      case 'start':
        return { 
          colorOverlay: 'cyber', 
          opacity: 0.3, 
          blur: 2, 
          theme: 'tech' 
        };
      case 'quiz':
        return { 
          colorOverlay: 'matrix', 
          opacity: 0.25, 
          blur: 3, 
          theme: 'tech' 
        };
      case 'report':
        return { 
          colorOverlay: 'aurora', 
          opacity: 0.35, 
          blur: 2, 
          theme: 'abstract' 
        };
      default:
        return { 
          colorOverlay: 'cyber', 
          opacity: 0.3, 
          blur: 2, 
          theme: 'tech' 
        };
    }
  };

  return (
    <BackgroundImage {...getBackgroundProps()}>
      {currentPage === 'start' && <StartPage />}
      {currentPage === 'quiz' && <QuizPage />}
      {currentPage === 'report' && <ReportPage />}
    </BackgroundImage>
  );
}

export default App;
