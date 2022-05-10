import React from 'react';
import { Container } from '@material-ui/core';
import './Questions.css'



export default function Question ({questions}) {
  console.log(questions)
  return (
    <Container className='info'>
      <aside>
        <h2> Category: </h2> 
        <h4> {questions[0].category} </h4>
      </aside>

      <aside>
        <h2> difficulty: </h2> 
        <h4> {questions[0].difficulty} </h4>
      </aside>

      <aside>
        <h2> Number Of Questions: </h2> 
        <h4> {questions.length} </h4>
      </aside>


    </Container>
  )
}