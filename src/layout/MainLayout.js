import React, { Component } from 'react';

import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem,
  Button,

} from 'reactstrap';

import {Link, BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import CadastrarUsuario from '../pages/Usuarios/CadastrarUsuario';
import ListarUsuario from '../pages/Usuarios/ListarUsuario';
import CadastrarTarefas from '../pages/Tarefas/CadastrarTarefas';
import ListarTarefas from '../pages/Tarefas/ListarTarefas';
import NotFound from '../pages/NotFound';
import PrivateRoute from '../components/PrivateRoute';


class MainLayout extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar color="dark" expand="xs">
            <NavbarBrand> 
              <Link to='/'>React</Link>
            </NavbarBrand>
            <Nav className="mr-auto ml-auto">
              <NavItem>
                <NavLink>
                  <Link to="/api/home">
                    <Button color="outline-success">
                      Home
                    </Button>
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        <Container>
          <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/api/cadastrarUsuarios" component={CadastrarUsuario} />
            <PrivateRoute path="/api/usuarios" component={ListarUsuario} />
            <PrivateRoute path="/api/cadastrarTarefas" component={CadastrarTarefas} />
            <PrivateRoute path="/api/tarefas" component={ListarTarefas} />
            <PrivateRoute path="/api/home" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        </BrowserRouter>
      </div>
    );
  }
}

export default MainLayout;