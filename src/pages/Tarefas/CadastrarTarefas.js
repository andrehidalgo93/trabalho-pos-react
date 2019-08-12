import React, { Component } from 'react'
import fakeAuth from '../../helpers/fake-auth';

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

class CadastrarTarefas extends Component {

  constructor(props) {
    super(props)

    this.state = {
      nomeTarefa: '',
      descricao: ''
    }
  }

  onChange = event => {
    const value = event.target.value
    const nomeTarefa = event.target.nomeTarefa
    const descricao = event.target.descricao
    this.setState({
      [nomeTarefa]: value,
      [descricao]: descricao
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
        <h2 className="text-center">Cadastrar Nova Tarefa</h2>
        <Form className="form" onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup>
            <Label for="nomeTarefa">Nome da Tarefa</Label>
            <Input 
              type="text" 
              name="nomeTarefa"
              onChange={this.onChange} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="descricao">Descrição</Label>
              <Input 
                type="text" 
                name="descricao" 
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

export default CadastrarTarefas;