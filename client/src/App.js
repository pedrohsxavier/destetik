import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import NavBarDestetik from './layout/NavBarDestetik';
import Login from './auth/Login';
import Register from './auth/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    const style = {
      height: 100 + '%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
      <Router>
        <div className='App'>
          <NavBarDestetik />
          <Container style={style}>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Register} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
