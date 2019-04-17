import React, { Component } from 'react';
import { Form, Button } from 'reactstrap';
import InputField from '../layout/InputField';

export class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: ''
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
            type='text'
            name='name'
            placeholder='Nome'
            onChange={this.handleOnChange}
            value={this.state.name}
          />
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
          <InputField
            type='password'
            name='password2'
            placeholder='Confirmação de Senha'
            onChange={this.handleOnChange}
            value={this.state.password2}
          />
          <Button type='submit'>Registre-se</Button>
          <p style={{ marginTop: 16 + 'px' }}>
            Já registrado? <a href='/'>Faça o login aqui.</a>
          </p>
        </Form>
      </>
    );
  }
}

export default Register;
