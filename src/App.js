
import * as React from 'react';
import './styles/app.css';
import Header from './components/Header';
import MainNav from './components/MainNav';
import { Routes, Route } from 'react-router-dom'
import Trending from './pages/trending/Trending';
import Series from './pages/series/Series';
import Search from './pages/search/Search';
import Movies from './pages/movies/Movies';
import { Container } from '@mui/material';
import { Navigate } from 'react-router';







export default function App () {









  return (
    <>
      <Header />
      <MainNav />

      <div className='app'>
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </Container>
      </div>
    </>
  );
}



