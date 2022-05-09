
import * as React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import HeroPage from './pages/HeroPage/HeroPage';
import QuizPage from './pages/QuizPage/QuizPage';




export default function App () {









  return (
    <>
      <Routes>
        <Route path='/' exact element={<HeroPage />} />
        <Route path='/quiz' element={<QuizPage />} />
      </Routes>
    </>
  );
}



