import { useState, useEffect } from 'react';

const BackgroundImage = ({ children, theme = 'quiz', className = '' }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const themeConfig = {
    start: {
      category: 'technology',
      seed: 42,
      blur: 3,
      overlay: 'rgba(15, 23, 42, 0.85)'
    },
    quiz: {
      category: 'space',
      seed: 100,
      blur: 2,
      overlay: 'rgba(15, 23, 42, 0.9)'
    },
    report: {
      category: 'abstract',
      seed: 200,
      blur: 1,
      overlay: 'rgba(15, 23, 42, 0.8)'
    }
  };

  useEffect(() => {
    const config = themeConfig[theme];
    const fetchImage = async () => {
      try {
        setLoading(true);
        setError(false);
        
        const width = window.innerWidth || 1920;
        const height = window.innerHeight || 1080;
        
        const imageUrl = `https://picsum.photos/${width}/${height}?random&seed=${config.seed}&blur=${config.blur}`;
        
        const img = new Image();
        img.onload = () => {
          setImageUrl(imageUrl);
          setLoading(false);
        };
        img.onerror = () => {
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

  const config = themeConfig[theme];

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {!error && imageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${imageUrl})`,
            opacity: loading ? 0 : 1
          }}
        />
      )}
      
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: config.overlay }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-600/10" />
      
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;