/** @format */

import Card from 'react-bootstrap/Card';
import './movie.css';
import Spinner from 'react-bootstrap/Spinner';
function Movie(props) {
  return (
    <>
      {props.isloding ?
        <Spinner animation='border' variant='light' />
      : <Card
          style={{ width: '15rem' }}
          className='movie-card'
          rating={props.year}>
          <Card.Img variant='top' src={props.img} />
          <Card.Body className='movie_body'>
            <Card.Title className='movie_titre'>{props.title}</Card.Title>
          </Card.Body>
        </Card>
      }
    </>
  );
}

export default Movie;
