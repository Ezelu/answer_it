import React from 'react';
import './HeroPage.css';
import { Button, Container, MenuItem, Select, TextField } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';



export default function HeroPage ({set_alert, set_quiz_param}) {

  const navigate = useNavigate();


  const [data, set_data]= React.useState({
    difficulty: '',
    type: 'multiple',
    category: 9,
    number_of_questions: 1,
  })


  const handle_data = (e) => {
    set_data(prev => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }


  const start_quiz = () => {
    if( data.type.trim().length < 1 ||
        data.difficulty.trim() < 1 ||
        data.number_of_questions < 1) {

        set_alert({
          open: true,
          message: 'Fill all parameters!',
          type: 'error'
        });
        return;
       }

    else{

      set_alert({
        open: true,
        message: 'Quiz Started!',
        type: 'success'
      })

      set_quiz_param(data)
      navigate('/quiz')

    }
  }










  return (
    <Container className='container' style={{width: '80%'}}>
      <h1> Answer It! </h1>

      <div className='form'>

      <TextField
          name='number_of_questions'
          className='TextField'
          type='number' 
          label='Number of Questions' 
          variant='outlined'
          onChange={handle_data}
          value={data.number_of_questions} />



        <span> Category </span>
        <Select className='select' name='category' onChange={handle_data} value={data.category} variant='outlined'>
          <MenuItem value={9}> General Knowledge </MenuItem>
          <MenuItem value={10}> Entertainment: Books </MenuItem>
          <MenuItem value={11}> Entertainment: Film </MenuItem>
          <MenuItem value={12}> Entertainment: Music </MenuItem>
          <MenuItem value={13}> Entertainment: Musicals and Theatre </MenuItem>
          <MenuItem value={14}> Entertainment: Television </MenuItem>
          <MenuItem value={15}> Entertainment: Video Games </MenuItem>
          <MenuItem value={16}> Entertainment: Board Games </MenuItem>
          <MenuItem value={17}> Science and Nature </MenuItem>
          <MenuItem value={18}> Science: Computers </MenuItem>
          <MenuItem value={19}> Science: Mathematics </MenuItem>
          <MenuItem value={20}> Mythology </MenuItem>
          <MenuItem value={21}> Sports </MenuItem>
          <MenuItem value={22}> Geography </MenuItem>
          <MenuItem value={23}> History </MenuItem>
          <MenuItem value={24}> Politics </MenuItem>
          <MenuItem value={25}> Art </MenuItem>
          <MenuItem value={26}> Celebrities </MenuItem>
          <MenuItem value={27}> Animals </MenuItem>
          <MenuItem value={28}> Vehicles </MenuItem>
          <MenuItem value={29}> Entertainment: Comics </MenuItem>
          <MenuItem value={30}> Science: Gadgets </MenuItem>
          <MenuItem value={31}> Entertainment: Japanese Anime and Manga </MenuItem>
          <MenuItem value={32}> Entertainment: Cartoon and animation </MenuItem>
        </Select>

    
        <span> Difficulty </span>
        <Select className='select' name='difficulty' onChange={handle_data} value={data.difficulty} variant='outlined'>
          <MenuItem value='easy'> Easy </MenuItem>
          <MenuItem value='medium'> Medium </MenuItem>
          <MenuItem value='hard'> Hard </MenuItem>
        </Select>


        <Button variant='contained' size='large' style={{
          background: 'orange',
          marginTop: '2%', 
          color: 'white'}}
          onClick={start_quiz}> 
            Start Quiz! 
          </Button> 
      </div>
    </Container> 
  )
}


// 9-32