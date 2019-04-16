import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import NavBarDestetik from './layout/NavBarDestetik';
import Login from './auth/Login';

class App extends Component {
  render() {
    const style = {
      height: 100 + '%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
      <div className='App'>
        <NavBarDestetik />
        <Container style={style}>
          <Login />
        </Container>
      </div>
    );
  }
}

export default App;
