/** @format */

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { CiSearch } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { fetechsearchapi } from './searchSlice';
import './navbar.css';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { useState,useEffect } from 'react';
function Navbar() {
  const [Search, SetSearch] = useState(null);
  const dispatch = useDispatch();
useEffect(()=>{
    const time=setTimeout(()=>{
        dispatch(fetechsearchapi(Search))
    },500)
    return ()=>clearTimeout(time)
},[Search])
  return (
    <div className='containe'>
      <h1>
        <span style={{}}>
          <MdOutlineLocalMovies
            style={{
              backgroundColor: 'rgb(57, 63, 63)',
              color: 'blue',
              borderRadius: '6px',
            }}
          />
        </span>{' '}
        <span style={{ color: 'white' }}>MovieSearch</span>
      </h1>
      <InputGroup size='lg' className='mt-5' style={{ width: '70%' }}>
        <InputGroup.Text
          id='inputGroup-sizing-lg'
          style={{
            background: ' rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          }}>
          <CiSearch size='30px' style={{ color: 'white' }} />
        </InputGroup.Text>
        <Form.Control
          aria-label='Large'
          aria-describedby='inputGroup-sizing-sm'
          placeholder='Search'
          style={{
            background: ' rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            color: 'white',
          }}
          value={Search}
          onChange={(e) => {
            SetSearch(e.target.value);
          }}
        />
      </InputGroup>
    </div>
  );
}

export default Navbar;
