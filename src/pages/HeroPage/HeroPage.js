import React from 'react';
import './HeroPage.css';
import { Container, MenuItem, Paper, Select, TextField } from '@material-ui/core';





export default function HeroPage () {














  return (
    <Container className='container' style={{width: '80%', background: 'yellow'}}>
      <h1> Answer It! </h1>

      <div className='form'>
        <TextField 
          type='number' 
          label='Number of Questions' 
          variant='outlined'/>

        <Select>
          <MenuItem value='easy'> Easy </MenuItem>
          <MenuItem value='medium'> Medium </MenuItem>
          <MenuItem value='hard'> Hard </MenuItem>
        </Select>

        <Select>
          <MenuItem value='multiple'> Multiple Choice </MenuItem>
          <MenuItem value='boolean'> True / false </MenuItem>
        </Select>

        <Select>
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

      </div>
    </Container> 
  )
}


// 9-32