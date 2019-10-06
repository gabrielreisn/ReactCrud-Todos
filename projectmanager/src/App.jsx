import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';

const defaultProjects = [
  {
    id: uuid.v4(),
    title: 'Business Website',
    category: 'Web Design',
  },
  {
    id: uuid.v4(),
    title: 'Social App',
    category: 'Mobile Development',
  },
  {
    id: uuid.v4(),
    title: 'Ecommerce Shopping Cart',
    category: 'Web Development',
  },
];

class App extends Component {
  state = {
    projects: defaultProjects,
    todos: [],
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: data => {
        this.setState({
          todos: data,
        });
      },
      error: (xhr, status, err) => {
        Error(err);
      },
    });
  };

  handleAddProject = project => {
    const { projects } = this.state;
    projects.push(project);
    this.setState({ projects });
  };

  handleDeleteProject = id => {
    const { projects } = this.state;
    const filteredProjects = projects.filter(el => el.id !== id);
    this.setState({ projects: filteredProjects });
  };

  render() {
    const { todos, projects } = this.state;
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject} />
        <Projects projects={projects} onDelete={this.handleDeleteProject} />
        <hr />
        <Todos todos={todos} />
      </div>
    );
  }
}

export default App;
