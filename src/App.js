import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import QuizStart from './QuizStart';
import QuizMain from './QuizMain';
import QuizMainTransparent from './QuizMainTransparent';
import LoginForm from './LoginForm';
import ResultPage from './ResultPage'

const App = () => {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<QuizStart />} />
        <Route path="/quizmain" element={<QuizMain />} />
        <Route path="/quizTransparent" element={<QuizMainTransparent />} />
        <Route path="/loginForm" element={<LoginForm/>} />
        <Route path="/resultPage" element={<ResultPage/>} />

      </Routes>
    </Router>
    
    </>
  );
};

export default App;
