import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QuizProvider } from './context/QuizContext.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

console.log('App starting...');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <QuizProvider>
        <App />
      </QuizProvider>
    </ErrorBoundary>
  </StrictMode>,
)
