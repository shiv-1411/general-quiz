import { useState, useEffect } from 'react';

const BackgroundImage = ({ 
  children, 
  theme = 'quiz', 
  className = '', 
  colorOverlay, 
  opacity, 
  blur 
}) => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false); // Start with false to use gradients immediately
  const [error, setError] = useState(false);

  const themeConfig = {
    start: {
      gradient: 'bg-cosmic',
      seed: 42,
      blur: 3,
      overlay: 'rgba(15, 23, 42, 0.4)',
      particles: true
    },
    quiz: {
      gradient: 'bg-nebula',
      seed: 100,
      blur: 2,
      overlay: 'rgba(15, 23, 42, 0.5)',
      particles: true
    },
    report: {
      gradient: 'bg-aurora',
      seed: 200,
      blur: 1,
      overlay: 'rgba(15, 23, 42, 0.3)',
      particles: true
    },
    tech: {
      gradient: 'bg-matrix',
      seed: 150,
      blur: 3,
      overlay: 'rgba(15, 23, 42, 0.4)',
      particles: true
    },
    abstract: {
      gradient: 'bg-cosmic',
      seed: 250,
      blur: 2,
      overlay: 'rgba(15, 23, 42, 0.4)',
      particles: true
    }
  };

  useEffect(() => {
    // Only try to fetch external images if we're in a browser environment
    if (typeof window === 'undefined') return;
    
    const config = themeConfig[theme] || themeConfig.quiz; // Fallback to 'quiz' theme if theme not found
    const fetchImage = async () => {
      try {
        setLoading(true);
        setError(false);
        
        const width = Math.min(window.innerWidth || 1920, 1920);
        const height = Math.min(window.innerHeight || 1080, 1080);
        
        // Add timeout for the image loading
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
        
        const imageUrl = `https://picsum.photos/${width}/${height}?random&seed=${config.seed}&blur=${config.blur}`;
        
        const img = new Image();
        img.onload = () => {
          clearTimeout(timeoutId);
          setImageUrl(imageUrl);
          setLoading(false);
        };
        img.onerror = () => {
          clearTimeout(timeoutId);
          console.log('Failed to load background image, using gradient fallback');
          setError(true);
          setLoading(false);
        };
        img.src = imageUrl;
        
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchImage();
  }, [theme]);

  const config = themeConfig[theme] || themeConfig.quiz; // Fallback to 'quiz' theme if theme not found

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Enhanced gradient background */}
      <div className={`absolute inset-0 ${config.gradient}`} />
      
      {/* Animated particle effects */}
      {config.particles && (
        <div className="absolute inset-0">
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
          
          {/* Data streams */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`stream-${i}`}
              className="absolute w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-data-stream"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
          
          {/* Glowing orbs */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute w-4 h-4 bg-gradient-radial from-purple-400/40 to-transparent rounded-full animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 6}s`
              }}
            />
          ))}
        </div>
      )}
      
      {/* Neural network lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {[...Array(15)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${Math.random() * 3}s` }}
            />
          ))}
        </svg>
      </div>
      
      {/* External image overlay - only if loaded successfully */}
      {!error && imageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${imageUrl})`,
            opacity: loading ? 0 : 0.3
          }}
        />
      )}
      
      {/* Dark overlay for better text readability */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: config.overlay }}
      />
      
      {/* Accent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-600/10" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;