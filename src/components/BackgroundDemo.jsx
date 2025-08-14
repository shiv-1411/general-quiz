import { useState } from 'react';
import BackgroundImage from './BackgroundImage';

const BackgroundDemo = () => {
  const [currentOverlay, setCurrentOverlay] = useState('blue');
  const [opacity, setOpacity] = useState(0.3);
  const [blur, setBlur] = useState(3);

  const overlayOptions = ['blue', 'purple', 'green', 'orange', 'teal'];

  return (
    <BackgroundImage colorOverlay={currentOverlay} opacity={opacity} blur={blur}>
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/30 max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center">
            🎨 Background Demo
          </h2>
          
          <div className="space-y-6">
            {/* Color Overlay Selector */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                Color Overlay:
              </label>
              <div className="flex space-x-2">
                {overlayOptions.map((color) => (
                  <button
                    key={color}
                    onClick={() => setCurrentOverlay(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      currentOverlay === color ? 'border-gray-800 scale-110' : 'border-gray-300'
                    }`}
                    style={{
                      background: color === 'blue' ? 'linear-gradient(45deg, #3b82f6, #8b5cf6)' :
                                color === 'purple' ? 'linear-gradient(45deg, #8b5cf6, #ec4899)' :
                                color === 'green' ? 'linear-gradient(45deg, #10b981, #14b8a6)' :
                                color === 'orange' ? 'linear-gradient(45deg, #f97316, #ef4444)' :
                                'linear-gradient(45deg, #14b8a6, #3b82f6)'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Opacity Slider */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                Background Opacity: {opacity}
              </label>
              <input
                type="range"
                min="0.1"
                max="0.8"
                step="0.1"
                value={opacity}
                onChange={(e) => setOpacity(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Blur Slider */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                Background Blur: {blur}px
              </label>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={blur}
                onChange={(e) => setBlur(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="text-center pt-4">
              <p className="text-gray-600 text-sm">
                🖼️ Beautiful images from <strong>Picsum Photos API</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default BackgroundDemo;
