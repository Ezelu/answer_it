import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './QuizPage.css';
import { Container } from '@material-ui/core';





export default function QuizPage ({quiz_param}) {

  const { difficulty, type, category, number_of_questions } = quiz_param


  const [questions, set_questions] = useState([])

  
  const fetchQuestions = async () => {
    // const { data } = await axios.get(
    //   `https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple`)

    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=${number_of_questions}&category=${category}&difficulty=${difficulty}&type=${type}`)

    set_questions(data.results);
  }


  useEffect(() => {
    fetchQuestions()
  }, [])



  console.log(questions)




  return (
    <Container className='container'>
      <h1> Quiz! </h1>


    </Container>
  )
}