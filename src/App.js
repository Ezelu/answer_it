
import * as React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import HeroPage from './pages/HeroPage/HeroPage';
import QuizPage from './pages/QuizPage/QuizPage';
import { Alert } from '@mui/material';
import { Snackbar } from '@material-ui/core';



export default function App () {

  const [alert, set_alert] = React.useState({
    type: '',
    message: '',
    open: false,
  })

  const [quiz_param, set_quiz_param]= React.useState({
    difficulty: '',
    type: '',
    category: 9,
    number_of_questions: 1,
  });

  console.log(quiz_param)


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    set_alert({open: false})
}






  return (
    <>
      <Routes>
        <Route path='/' exact element={<HeroPage set_alert={set_alert} set_quiz_param={set_quiz_param} />} />
        <Route path='/quiz' element={<QuizPage quiz_param={quiz_param} />} />
      </Routes>


      <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert.type} sx={{ width: '100%' }} variant='filled'>
          {alert.message}
        </Alert>
      </Snackbar>
    </>
  );
}


