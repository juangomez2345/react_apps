import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// data
import { initialtasklist } from './tasklist.json';

// subcomponents
import TaskForm from './components/TaskForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      initialtasklist
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  removeTask(index) {
    this.setState({
      initialtasklist: this.state.initialtasklist.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTask(tasklist) {
    this.setState({
      initialtasklist: [...this.state.initialtasklist, tasklist]
    })
  }

  render() {
    const tasklist = this.state.initialtasklist.map((task, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{task.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {task.priority}
              </span>
            </div>
            <div className="card-body">
              {task.description}
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTask.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    });

    // RETURN THE COMPONENT
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.initialtasklist.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TaskForm onAddTask={this.handleAddTask}></TaskForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {tasklist}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
