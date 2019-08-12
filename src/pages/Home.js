import React, { Component } from 'react';

import fakeAuth from '../helpers/fake-auth';

import {
  Container,
  Row, Col, Card,
  Button,
} from 'reactstrap';

import { Link } from 'react-router-dom';

class Home extends Component {

  onSairClick = () => {
    fakeAuth.setAuthenticated(false)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm="6">
              <Card className="text-center" body>
                <Link to="/api/cadastrarUsuarios">
                  <Button color="success">
                    <i class="fa fa-user-plus fa-2x"></i>
                    <h6>Novo Usuario</h6> 
                  </Button>
                </Link>
              </Card>
            </Col>
            <Col sm="6">
              <Card className="text-center" body>
                <Link to="/api/usuarios">
                  <Button color="primary">
                    <i class="fa fa-address-book fa-2x"></i>
                    <h6>Lista Usuario</h6>
                  </Button>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <Card className="text-center" body>
                <Link to="/api/cadastrarTarefas">
                  <Button color="success">
                  <i class="fa fa-plus-circle fa-2x"></i>
                    <h6>Nova Tarefa</h6> 
                  </Button>
                </Link>
              </Card>
            </Col>
            <Col sm="6">
              <Card className="text-center" body>
                <Link to="/api/tarefas">
                  <Button color="primary">
                    <i class="fa fa-list-alt fa-2x"></i>
                    <h6>Lista Tarefas</h6> 
                  </Button>
                </Link>
              </Card>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col className="text-center">
              <Button className="ml-auto" color="danger" onClick={this.onSairClick}>
                <i className="fa fa-sign-out fa-2x"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home;