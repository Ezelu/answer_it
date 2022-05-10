import React from 'react';
import { Container, Chip } from '@material-ui/core';
import './Questions.css'



export default function Question ({questions}) {
  
  












  return (
    <div>
      <Container className='info'>
        <div>
          <h2> Category: </h2> 
          <h4> {questions[0] && questions[0].category} </h4>
        </div>

        <div>
          <h2> difficulty: </h2> 
          <h4> {questions[0] && questions[0].difficulty} </h4>
        </div>

        <div>
          <h2> Questions: </h2> 
          <h4> {questions[0] && questions.length} </h4>
        </div>
      </Container>


      <Container>
        <ol>
          {
            questions[0] &&

            questions.map(each => {
              return (
                <li> {each.question} <br/>
                  
                </li>
              )
            })
          }
        </ol>
      </Container>
    </div>
  )
}