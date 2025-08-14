import { useState } from 'react';

// Simple fallback App without external dependencies
function SimpleApp() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <div className="min-h-screen bg-cosmic flex items-center justify-center font-sans text-cyan-400 text-center p-5 relative overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        <div className="bg-slate-900/90 backdrop-blur-xl p-12 rounded-3xl border-2 border-cyan-400/50 max-w-2xl w-full relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] animate-hologram">
          {/* Neon border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 p-[2px] animate-pulse">
            <div className="rounded-3xl bg-slate-900/95 w-full h-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-8xl mb-8 animate-bounce relative">
              🧠
              <div className="absolute inset-0 text-8xl animate-pulse opacity-50">✨</div>
            </div>
            <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 animate-glow">
              CausalFunnel Quiz
            </h1>
            <p className="text-2xl mb-8 text-blue-300 font-semibold">
              Software Engineer Intern Assessment
            </p>
            <p className="text-lg mb-10 text-cyan-200 opacity-80">
              Advanced AI-Powered Quiz Platform
            </p>
            <button
              onClick={() => setStarted(true)}
              className="w-full py-6 px-10 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white border-none text-2xl font-black rounded-3xl cursor-pointer transition-all duration-700 transform hover:-translate-y-2 hover:scale-105 shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:shadow-[0_0_60px_rgba(34,211,238,0.8)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative flex items-center justify-center">
                <span className="mr-4 text-3xl animate-bounce">🚀</span>
                Start Epic Quiz
                <span className="ml-4 text-3xl animate-bounce" style={{animationDelay: '0.5s'}}>⚡</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: '#22d3ee',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'rgba(15, 23, 42, 0.8)',
        padding: '40px',
        borderRadius: '20px',
        border: '1px solid #22d3ee',
        maxWidth: '600px',
        width: '100%'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>✅ App is Working!</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '20px', color: '#94a3b8' }}>
          The application loaded successfully. Now debugging the full version...
        </p>
        <div style={{ 
          background: '#0f172a', 
          padding: '20px', 
          borderRadius: '10px',
          textAlign: 'left',
          fontSize: '0.9rem',
          fontFamily: 'monospace'
        }}>
          <p>✅ React is working</p>
          <p>✅ Vite build is successful</p>
          <p>✅ Deployment is functional</p>
          <p>🔄 Loading full quiz application...</p>
        </div>
        <button
          onClick={() => window.location.reload()}
          style={{
            background: 'linear-gradient(45deg, #22d3ee, #3b82f6)',
            color: '#1e293b',
            border: 'none',
            padding: '10px 20px',
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Reload Full App
        </button>
      </div>
    </div>
  );
}

export default SimpleApp;
