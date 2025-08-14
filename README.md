# 🧠 CausalFunnel Quiz - Advanced AI-Powered Assessment Platform

<div align="center">

![CausalFunnel Quiz](https://img.shields.io/badge/Quiz-CausalFunnel-cyan?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-purple?style=for-the-badge&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-teal?style=for-the-badge&logo=tailwindcss)

**A stunning, futuristic quiz application with cosmic UI and advanced animations**

[🚀 Live Demo](https://general-quiz-dun.vercel.app/) • [📁 Repository](https://github.com/shiv-1411/general-quiz)

</div>

## ✨ **Visual Experience**

This isn't just a quiz app - it's a **visual masterpiece** featuring:

- 🌌 **Cosmic Background Themes**: Multiple dynamic gradient backgrounds (Cosmic, Nebula, Aurora, Matrix)
- ⚡ **Floating Particles**: Animated particle systems with random positioning
- 🔮 **Holographic Effects**: Futuristic UI with neon borders and glowing elements
- 🌊 **Data Streams**: Matrix-style flowing data animations
- ✨ **Neural Networks**: SVG-based connected line animations
- 🎭 **Interactive Animations**: Hover effects, scale transforms, and smooth transitions

## 🚀 **Core Features**

### 🎯 **Smart Quiz Engine**
- **Dynamic Question Fetching**: Integrates with Open Trivia Database API for fresh questions
- **Intelligent Fallback**: 15+ hardcoded questions when API is unavailable
- **Answer Randomization**: Shuffles choices while preserving correct answers
- **Progress Tracking**: Visual indicators for visited, answered, and current questions

### ⏱️ **Advanced Timer System**
- **30-minute countdown** with visual progress bars
- **Auto-submission** when time expires
- **Real-time updates** with smooth animations
- **Warning indicators** for low time remaining

### 🎨 **Enhanced User Experience**
- **Email Validation**: Smart regex-based validation with visual feedback
- **Navigation System**: Click any question number to jump directly
- **Responsive Design**: Seamless experience across all devices
- **Error Boundaries**: Graceful error handling with beautiful fallbacks

### 📊 **Comprehensive Analytics**
- **Detailed Results**: Compare user answers with correct solutions
- **Score Calculation**: Percentage-based scoring with visual representations
- **Performance Metrics**: Time per question and completion analytics
- **Category Breakdown**: Results organized by question categories

## 🛠️ **Advanced Tech Stack**

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | Frontend Framework | 18+ |
| **Vite** | Build Tool & Dev Server | 5.0+ |
| **Tailwind CSS** | Utility-First Styling | 3.0+ |
| **Context API** | State Management | Built-in |
| **Custom Hooks** | Reusable Logic | Custom |
| **Vercel** | Deployment Platform | Latest |

## 🏃‍♂️ **Quick Start**

### Prerequisites
```bash
node --version  # v16.0.0 or higher
npm --version   # v8.0.0 or higher
```

### Installation & Setup

```bash
# Clone the repository
git clone https://github.com/shiv-1411/general-quiz.git
cd general-quiz

# Start development server
npm run dev

# Open in browser at http://localhost:5173
```

### 🏗️ **Build & Deployment**

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel (automatic via Git)
git push origin main
```

## 🎨 **Visual Architecture**

### 🌌 **Background Themes**
```css
.bg-cosmic    /* Deep space gradient with purple/blue tones */
.bg-nebula    /* Colorful galaxy with green/pink accents */
.bg-aurora    /* Northern lights with blue/green waves */
.bg-matrix    /* Dark tech theme with subtle green hints */
```

### ✨ **Animation System**
```css
.animate-float           /* 3D floating motion */
.animate-particle-float  /* Complex particle movement */
.animate-hologram       /* Futuristic holographic effect */
.animate-neon-border    /* Pulsing neon borders */
.animate-data-stream    /* Matrix-style data flow */
.animate-glow           /* Enhanced glowing effects */
```

## 📁 **Project Structure**

```
src/
├── components/          # React components
│   ├── StartPage.jsx   # Landing page with cosmic design
│   ├── QuizPage.jsx    # Main quiz interface
│   ├── ReportPage.jsx  # Results with analytics
│   ├── BackgroundImage.jsx # Dynamic backgrounds
│   └── ErrorBoundary.jsx   # Error handling
├── context/
│   └── QuizContext.jsx # Global state management
├── hooks/
│   └── useQuizData.js  # API integration hook
└── styles/
    └── index.css       # Enhanced animations & utilities
```

## 🚀 **Key Features Walkthrough**

### 1. **Cosmic Landing Experience**
- **Email validation** with real-time feedback
- **Floating particles** and animated backgrounds
- **Neon button effects** with hover transformations
- **Matrix-style** binary code animations

### 2. **Advanced Quiz Interface**
- **Dynamic question loading** with fallback system
- **Timer with visual progress** and warning states
- **Smart navigation** between questions
- **Real-time answer tracking** and validation

### 3. **Comprehensive Results**
- **Detailed score breakdown** with percentages
- **Question-by-question review** with correct answers
- **Performance analytics** and timing data
- **Visual representations** of quiz performance

## ⚡ **Performance Optimizations**

- **Lazy Loading**: Components loaded on demand
- **Memoization**: Optimized re-renders with React.memo
- **Bundle Splitting**: Efficient code splitting with Vite
- **Image Optimization**: Compressed assets and WebP support
- **CSS Purging**: Unused styles removed in production

## 🔧 **Development Features**

### Error Handling
- **Error Boundaries**: Graceful fallbacks for component errors
- **API Fallbacks**: Local questions when external API fails
- **Network Resilience**: Retry logic and timeout handling

### Code Quality
- **ESLint**: Code linting and formatting
- **Component Structure**: Modular, reusable components
- **Custom Hooks**: Abstracted business logic
- **Type Safety**: PropTypes for component validation

## 🌐 **Browser Support**

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 88+ | ✅ Full |
| Firefox | 85+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 88+ | ✅ Full |

## 📱 **Responsive Design**

- **Mobile First**: Optimized for small screens
- **Tablet Support**: Enhanced layouts for medium screens
- **Desktop**: Full-featured experience with animations
- **Touch Friendly**: Gesture support and large touch targets

## 🎯 **Assessment Criteria Met**

✅ **React Proficiency**: Advanced hooks, context, and component patterns  
✅ **State Management**: Complex state with useReducer and Context API  
✅ **API Integration**: Dynamic data fetching with error handling  
✅ **UI/UX Design**: Professional, animated, and responsive interface  
✅ **Code Quality**: Clean, documented, and maintainable codebase  
✅ **Performance**: Optimized bundle size and smooth animations  

## 👨‍💻 **Developer Experience**

```bash
# Hot reload development
npm run dev

# Type checking
npm run type-check

# Build analysis
npm run build:analyze

# Production preview
npm run preview
```

## 🤝 **Contributing**

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 **Acknowledgments**

- **Open Trivia Database** for providing the quiz questions API
- **Tailwind CSS** for the utility-first styling approach
- **Vercel** for seamless deployment and hosting
- **CausalFunnel** for the opportunity to showcase these skills

---

<div align="center">

**Built with ❤️ for CausalFunnel Software Engineer Intern Assessment**

[🚀 Live Demo](https://general-quiz-dun.vercel.app/) • [📧 Contact](mailto:bhardwaj1411shivam@gmail.com)

</div>
npm run build
```

## 🎯 Usage Guide

### Starting the Quiz
1. Enter a valid email address on the start page
2. Click "Start Quiz" to begin
3. You have 30 minutes to complete 15 questions

### During the Quiz
- **Answer Questions**: Click on any answer choice to select it
- **Navigate**: Use Previous/Next buttons or click question numbers in the overview panel
- **Track Progress**: Monitor your completion percentage and time remaining
- **Submit Early**: Click "Submit Quiz" anytime to finish early

### Question Status Indicators
- **Blue**: Current question
- **Green**: Answered questions
- **Yellow**: Visited but not answered
- **Gray**: Not yet visited

### Viewing Results
- **Score Overview**: Overall percentage and statistics
- **Detailed Review**: Question-by-question comparison of your answers vs. correct answers
- **Restart Option**: Take the quiz again with fresh questions

---

**Built with ❤️ for CausalFunnel's Software Engineer Intern Assessment**
