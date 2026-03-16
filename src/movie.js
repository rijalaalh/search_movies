import Card from 'react-bootstrap/Card';
import './movie.css'
function Movie(props) {
  return (
    <Card style={{ width: '15rem' }} className='movie-card' rating='6.00'>
      <Card.Img variant="top" src={props.img} />
      <Card.Body className='movie_body'>
        <Card.Title className='movie_titre'>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Movie;