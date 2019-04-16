import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';

export class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <Form>
          <FormGroup row>
            <Col>
              <Input
                type='email'
                name='email'
                placeholder='Email'
                value={this.state.email}
                onChange={this.handleOnChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col>
              <Input
                type='password'
                name='password'
                placeholder='Senha'
                value={this.state.password}
                onChange={this.handleOnChange}
              />
            </Col>
          </FormGroup>
          <Button type='submit'>Login</Button>
          <p style={{ marginTop: 16 + 'px' }}>
            Ainda nao registrado? Registre-se aqui.
          </p>
        </Form>
      </>
    );
  }
}

export default Login;
