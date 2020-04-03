import React from 'react';

// stylesheets
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Repositories from './components/Repositories'
import Bookmarks from './components/Bookmarks'
import Header from './components/Header'
import { Row } from 'react-bootstrap'

function App() {
  return (
    <div className="main-container">
      <Row>
        <Header />
      </Row>
      <Row>
        <Bookmarks />
      </Row>
      <Row className="repositories-container">
        <Repositories />
      </Row>
    </div>
  );
}

export default App;
