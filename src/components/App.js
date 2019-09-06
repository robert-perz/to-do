import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import '../Sass/_App.scss';

class App extends Component {
  state = {
    tasks: []
  }
  counter = 0;
  handleRemoveTask = (id) => {
    const tasks = [...this.state.tasks];
    const indexToRemove = tasks.findIndex(task => task.id === id);
    tasks.splice(indexToRemove, 1);
    this.setState({
      tasks
    })
  }
  handleTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks
    })
  }
  addTask = (txt, checked, date) => {
    const newTask = {
      id: this.counter,
      txt,
      date,
      important: checked,
      active: true,
      finishDate: null
    }
    this.counter++;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask]
    })
    )
    return true;
  }
  render() {
    return (
      <>
        <h1 className='app-title'>ToDo</h1>
        <AddTask
          addTask={this.addTask}
        />
        <TaskList
          tasks={this.state.tasks}
          removeTask={this.handleRemoveTask}
          taskStatus={this.handleTaskStatus}
        />
      </>
    );
  }
}
export default App;
