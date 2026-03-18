/** @format */

import './App.css';
import Navbar from './navbar';
import Container from 'react-bootstrap/Container';
import Movie from './movie';
import { title_page } from './page_data';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import { BrowserRouter, Routes, Route } from 'react-router';
import Pagemovies from './Pagemovie';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
function Home() {
  const isloding = useSelector((st) => st.search.isloading);
  const movies = useSelector((state) =>
    state.search.result ? state.search.result : [],
  );
  console.log(movies);
  return (
    <div
      className='App'
      style={{
        backgroundColor: 'black',
        minHeight: '100vh',
        paddingTop: '200px',
      }}>
      <Navbar />
      <Container>
        <Row>
          {movies.map((movie, index) => (
            <Col key={index}>
              <Movie
                isloding={isloding}
                title={movie.Title}
                img={movie.Poster}
                year={movie.Year}
                type={movie.Type}
                index={index}
                fheart={false}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
function App() {
  return (
    <title_page.Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/page' element={<Pagemovies />} />
        </Routes>
      </BrowserRouter>
    </title_page.Provider>
  );
}

export default App;
