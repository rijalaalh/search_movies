/** @format */

import Card from 'react-bootstrap/Card';
import './movie.css';
import Spinner from 'react-bootstrap/Spinner';
import { FaHeart } from 'react-icons/fa';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { title_page } from './page_data';

function Movie(props) {
  const [heart, SetHeart] = useState(props.fheart || false);
  const title_pages = useContext(title_page);
  const navigate = useNavigate();
  return (
    <>
      {props.isloding ?
        <Spinner animation='border' variant='light' />
      : <Card
          style={{ width: '15rem' }}
          className='movie-card'
          rating={props.year}
          onClick={(e) => {
            if (e.target.closest('#heart')) {
            } else {
              navigate('/page');
            }
          }}>
          <Card.Img variant='top' src={props.img} />
          <Card.Body className='movie_body'>
            <Card.Title className='movie_titre'>
              {props.type}:{props.title}
            </Card.Title>
            <FaHeart
              id='heart'
              className='heart_button'
              style={{
                color: heart ? 'red' : 'white',
              }}
              onClick={() => {
                if (heart) {
                  SetHeart(false);
                  localStorage.removeItem(`${props.title}`);
                  window.dispatchEvent(new Event('localStorageUpdated')); // ← notify HeartModal
                  if (typeof props.fheart === 'function') {
                    // ← only call if it's a function
                    props.fheart(false);
                  }
                } else {
                  SetHeart(true);
                  localStorage.setItem(`${props.title}`, JSON.stringify(props));
                  window.dispatchEvent(new Event('localStorageUpdated'));
                }
              }}
            />
          </Card.Body>
        </Card>
      }
    </>
  );
}

export default Movie;
