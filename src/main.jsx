import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SimpleApp from './SimpleApp.jsx'
import { QuizProvider } from './context/QuizContext.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

console.log('App starting...');

// Try the full app first, fallback to simple app if there's an error
const AppToRender = () => {
  try {
    return (
      <ErrorBoundary>
        <QuizProvider>
          <App />
        </QuizProvider>
      </ErrorBoundary>
    );
  } catch (error) {
    console.error('Error loading full app, showing simple app:', error);
    return <SimpleApp />;
  }
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppToRender />
  </StrictMode>,
)
