import React from 'react'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa'

import { searchRepositories } from '../actions'

export default () => {
  const dispatch = useDispatch();

  const searchHandler = () => {
    const query = document.getElementById('search-input').value;
    if (query) {
      return dispatch(searchRepositories(query));
    } else {
      alert('Please enter a value to search for.')
    }
  }

  return (
    <Navbar expand="md" className="header">
      <Navbar.Brand className="brand">Search for Github Repositories!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="search-bar">
        <Form inline>
          <FormControl id="search-input" type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success" onClick={searchHandler}><FaSearch /></Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}