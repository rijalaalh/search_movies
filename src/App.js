/** @format */

import './App.css';
import Navbar from './navbar';
import Container from 'react-bootstrap/Container';
import Movie from './movie';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';

function App() {
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
        minHeight:'100vh',
        paddingTop: '200px',
      }}>
      <Navbar />
      <Container>
        <Row>
          {movies.map((movie, index) => (
            <Col key={index}>
              <Movie
                title={movie.Title}
                img={movie.Poster}
                year={movie.Year}
                type={movies.type}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
