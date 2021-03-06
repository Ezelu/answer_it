import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './QuizPage.css';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Container } from '@material-ui/core';
import Questions from '../../components/Questions';





export default function QuizPage ({quiz_param}) {

  const { difficulty, type, category, number_of_questions } = quiz_param
  const [questions, set_questions] = useState([])
  const [loading, set_loading] = useState(false)

  
  const fetchQuestions = async () => {
    set_loading(true)
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=${number_of_questions}&category=${category}&difficulty=${difficulty}&type=${type}`);
    
    set_loading(false)
    set_questions(data.results);
  }


  useEffect(() => {
    fetchQuestions()
  }, [])







  return (
    <Container className='container'>
      {/* <KeyboardReturnIcon /> */}
      <h1> Quiz! </h1>

      <Questions questions={questions} loading={loading} />
    </Container>
  )
}