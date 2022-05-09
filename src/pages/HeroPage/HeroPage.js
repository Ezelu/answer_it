import React from 'react';
import './HeroPage.css';
import { Container, Paper, TextField } from '@material-ui/core';





export default function HeroPage () {
  return (
    <Container className='container' style={{width: '80%', background: 'yellow'}}>
      <h1> HeroPage </h1>

      <div className='form'>
        <TextField type='text' label='name' />
      </div>
    </Container> 
  )
}