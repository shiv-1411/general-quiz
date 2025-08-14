# CausalFunnel Quiz Application

A modern, interactive quiz application built for CausalFunnel's Software Engineer Intern Assessment. This application demonstrates proficiency in React.js, state management, API integration, and responsive UI design.

## 🚀 Features

### Core Functionality
- **Dynamic Question Fetching**: Retrieves 15 trivia questions from Open Trivia Database API
- **Smart Answer Shuffling**: Randomizes answer choices for each question while preserving correct answers
- **Email Validation**: Ensures valid email format before starting the quiz
- **30-minute Timer**: Countdown timer with visual indicators and automatic submission
- **Navigation System**: Click any question number to jump directly to that question
- **Progress Tracking**: Visual indicators for visited, answered, and current questions
- **Comprehensive Results**: Detailed report comparing user answers with correct answers

### User Experience
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Visual Feedback**: Color-coded status indicators and progress bars
- **Accessibility**: Keyboard navigation and screen reader friendly
- **Error Handling**: Graceful error states with retry options
- **Loading States**: Smooth loading animations during data fetching

### Technical Features
- **React Context API**: Centralized state management avoiding prop drilling
- **Custom Hooks**: Reusable `useQuizData` hook for API integration
- **Modern UI**: Tailwind CSS for consistent, beautiful styling
- **Performance Optimized**: Efficient re-renders and minimal bundle size

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API + useReducer
- **HTTP Client**: Fetch API
- **Build Tool**: Vite
- **Package Manager**: npm

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
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
