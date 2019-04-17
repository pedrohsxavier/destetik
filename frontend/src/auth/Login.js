import React, { Component } from 'react';
import { Form, Button } from 'reactstrap';
import InputField from '../layout/InputField';

export class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newUser = this.state;
    console.log(newUser);
  };

  render() {
    return (
      <>
        <Form method='POST' onSubmit={this.handleSubmit}>
          <InputField
            type='email'
            name='email'
            placeholder='Email'
            onChange={this.handleOnChange}
            value={this.state.email}
          />
          <InputField
            type='password'
            name='password'
            placeholder='Senha'
            onChange={this.handleOnChange}
            value={this.state.password}
          />
          <Button type='submit'>Login</Button>
          <p style={{ marginTop: 16 + 'px' }}>
            Ainda não registrado? <a href='/'>Registre-se aqui.</a>
          </p>
        </Form>
      </>
    );
  }
}

export default Login;
