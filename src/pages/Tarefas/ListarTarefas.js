import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom';
import { Table } from 'reactstrap';
import axios from 'axios';

class ListarTarefas extends Component {

  state = {
    tasks: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      const { data } = response;
      this.setState({
        tasks: data
      })
    })
    .catch(err => {
      console.warn(err);
      alert(err.message)
    })
  }

  renderTasks = () => {
    const { tasks } = this.state;
    const taskItems = tasks.map(task => {
      return (
        <tr>
          <td>{task.id}</td>
          <td>
            <Link to={'/api/tarefas/' + task.id}>
              {task.title}
            </Link>
          </td>
          <td>{task.userId}</td>
          <td>{task.completed ? 'Sim' : 'Não'}</td>
        </tr>
      )
    });
    return taskItems;
  }

  renderTaskDescription = (routeProps) => {
    const { tasks } = this.state;
    const taskId = parseInt(routeProps.match.params.taskId);
    const task = tasks.find( ( task )  => {
      return task.id === taskId;
    })

    if (!task) {
      return (
        <p>Tarefa não encontrada</p>
      )
    }

    return(
      <p>
        {task.id} ----- {task.title} ----- {task.completed ? 'Sim' : 'Não'}
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
              <th>Título</th>
              <th>Usuário</th>
              <th>Concluída</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTasks()}
          </tbody>
        </Table>

        <br />

        <div>
          {/* passando uma função invés de um componente */}
          <Route path="/tasks/:taskId" render={this.renderTaskDescription} />
        </div>
      </div>
    )
  }
}

export default ListarTarefas;