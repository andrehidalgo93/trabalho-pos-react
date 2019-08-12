import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom';
import { Table } from 'reactstrap';
import axios from 'axios';

class ListarUsuario extends Component {

  state = {
    user: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const { data } = response;
      this.setState({
        user: data
      })
    })
    .catch(err => {
      console.warn(err);
      alert(err.message)
    })
  }

  renderUser = () => {
    const { user } = this.state;
    const userItems = user.map(user => {
      return (
        <tr>
          <td>{user.id}</td>
          <td>
            <Link to={'/api/usuarios/' + user.id}>
              {user.name}
            </Link>
          </td>
          
          <td>{user.username}</td>
          <td>{user.email}</td>
        </tr>
      )
    });
    return userItems;
  }

  renderTaskDescription = (routeProps) => {
    const { user } = this.state;
    const userId = parseInt(routeProps.match.params.userId);
    const usuario = user.find( ( usuario )  => {
      return usuario.id === userId;
    })

    if (!usuario) {
      return (
        <p>Usuario não encontrada</p>
      )
    }

    return(
      <p>
        {usuario.id} ----- {usuario.username} ----- {usuario.email}
      </p>
    )
  }
  
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Nome de Usuario</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.renderUser()}
          </tbody>
        </Table>

        <br />

        <div>
          {/* passando uma função invés de um componente */}
          <Route path="/usuarios/:taskId" render={this.renderUserDescription} />
        </div>
      </div>
    )
  }
}

export default ListarUsuario;