import { useState } from 'react';

// Simple fallback App without external dependencies
function SimpleApp() {
  const [started, setStarted] = useState(false);

  if (!started) {
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
          maxWidth: '500px',
          width: '100%'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>🧠 CausalFunnel Quiz</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#94a3b8' }}>
            Software Engineer Intern Assessment
          </p>
          <button
            onClick={() => setStarted(true)}
            style={{
              background: 'linear-gradient(45deg, #22d3ee, #3b82f6)',
              color: '#1e293b',
              border: 'none',
              padding: '15px 30px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '10px',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Start Quiz 🚀
          </button>
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
