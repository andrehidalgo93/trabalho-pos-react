import React, { Component } from 'react'

import fakeAuth from '../../helpers/fake-auth';

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

class CadastrarUsuario extends Component {

  constructor(props) {
    super(props)

    this.state = {
      nome: '',
      email: '',
      password: ''
    }
  }

  onChange = event => {
    const value = event.target.value
    const nome = event.target.nome
    const email = event.target.email
    const password = event.target.password
    this.setState({
      [nome]: value,
      [email]: value,
      [password]: password
    })
  }

  onEntrarClick = () => {
    fakeAuth.setAuthenticated(true,
      this.props.history.push('/api/home'))
  }

  render() {
    return (
      <div>
      <Container>
        <h2 className="text-center">Cadastro de Usuario</h2>
        <Form>
          <Col>
            <FormGroup>
            <Label for="nome">Nome</Label>
            <Input 
              autoFocus 
              type="text" 
              name="nome" 
              onChange={this.onChange} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
            <Label for="email">E-mail</Label>
            <Input 
              type="email" 
              name="email" 
              onChange={this.onChange} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password" 
                name="password" 
                onChange={this.onChange} />
            </FormGroup>
          </Col>
          <Button 
            color="outline-success"
            size="lg"
            block
            onClick={ this.onEntrarClick } >
              Salvar
          </Button>
        </Form>
      </Container>
    </div>
    )
  }
}

export default CadastrarUsuario;