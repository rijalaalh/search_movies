/** @format */

import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Movie from './movie';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
export default function HeartModal(props) {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const loadFavorites = () => {
      const data = {};
      Object.keys(localStorage).forEach((key) => {
        data[key] = JSON.parse(localStorage.getItem(key));
      });
      setResult(data); // ← updates state, triggers re-render
    };

    loadFavorites(); // ← run on mount

    window.addEventListener('localStorageUpdated', loadFavorites); // ← listen for removal
    return () =>
      window.removeEventListener('localStorageUpdated', loadFavorites);
  }, []);
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      style={{ zIndex: '99999999999999', height: '90vh' }}>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Your Favorite movies ❤️
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ overflowY: 'scroll' }}>
        <Container>
          <Row>
            {Object.entries(result).map(([key, value]) => (
              <Col key={key} style={{ gap: '5px' }}>
                <Movie
                  isloding={value.isloding}
                  title={value.title}
                  img={value.img}
                  year={value.year}
                  type={value.type}
                  index={key}
                  fheart={true}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
