import { useState, useEffect } from 'react';

const Timer = ({ onTimerExpiry }) => {
  // 30 minutes in seconds
  const QUIZ_DURATION = 30 * 60;
  
  const [timeRemaining, setTimeRemaining] = useState(QUIZ_DURATION);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setIsExpired(true);
          onTimerExpiry();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimerExpiry]);

  // Convert seconds to MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Calculate progress percentage for visual indicator
  const progressPercentage = ((QUIZ_DURATION - timeRemaining) / QUIZ_DURATION) * 100;

  // Determine color based on remaining time
  const getTimerColor = () => {
    if (timeRemaining <= 300) return 'text-red-600'; // Last 5 minutes
    if (timeRemaining <= 600) return 'text-orange-600'; // Last 10 minutes
    return 'text-green-600'; // More than 10 minutes
  };

  const getProgressColor = () => {
    if (timeRemaining <= 300) return 'bg-red-500'; // Last 5 minutes
    if (timeRemaining <= 600) return 'bg-orange-500'; // Last 10 minutes
    return 'bg-green-500'; // More than 10 minutes
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
      <div className="text-center">
        <div className="text-sm text-gray-600 mb-3 font-medium flex items-center justify-center">
          <span className="mr-2">⏰</span>
          Time Remaining
        </div>
        <div className={`text-3xl font-bold ${getTimerColor()} mb-4`}>
          {formatTime(timeRemaining)}
        </div>
        
        {/* Progress bar */}
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
            <div
              className={`h-3 rounded-full transition-all duration-1000 ${getProgressColor()}`}
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Warning messages */}
        {timeRemaining <= 300 && !isExpired && (
          <div className="mt-4 text-sm text-red-600 font-bold animate-pulse bg-red-50 px-4 py-2 rounded-xl">
            ⚠️ Less than 5 minutes remaining!
          </div>
        )}
        
        {timeRemaining <= 60 && !isExpired && (
          <div className="mt-2 text-sm text-red-700 font-bold animate-bounce bg-red-100 px-4 py-2 rounded-xl">
            🚨 Final minute!
          </div>
        )}

        {isExpired && (
          <div className="mt-4 text-sm text-red-700 font-bold bg-red-100 px-4 py-2 rounded-xl">
            ⏰ Time's up!
          </div>
        )}
      </div>
    </div>
  );
};

export default Timer;
