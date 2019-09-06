import React, { Component } from 'react';
import '../Sass/_AddTask.scss';

class AddTask extends Component {
  state = {
    txt: '',
    checked: false,
    date: new Date().toISOString().slice(0, 10)
  }
  handleTaskName = (e) => {
    this.setState({
      txt: e.target.value
    })
  }
  handleImportantCheckbox = () => {
    this.setState({
      checked: !this.state.checked
    })
  }
  handleSetDate = (e) => {
    this.setState({
      date: e.target.value
    })
  }
  handleAddTaskButton = () => {
    const { txt, checked, date } = this.state
    if (txt.length > 1) {
      const add = this.props.addTask(txt, checked, date);
      if (add) {
        this.setState({
          txt: '',
          checked: false,
          date: new Date().toISOString().slice(0, 10)
        })
      }
    } else {
      alert('Task name should be longer than one character.')
    }
  }
  render() {
    const minDate = new Date().toISOString().slice(0, 10);
    const maxDate = `${new Date().toISOString().slice(0, 4) * 1 + 2}-08-13`;
    return (
      <div className='addtask'>
        <div className="addtask addtask-txt">
          <label htmlFor="tasktxt"></label>
          <input id='tasktxt' className='addtask-txt__input' value={this.state.txt} type="text" placeholder='Click and write task to do here...' onChange={this.handleTaskName} />
          <input className='addtask-txt__checkbox' type="checkbox" checked={this.state.checked}
            id="important" onChange={this.handleImportantCheckbox} />
          <label className='addtask-txt__label' htmlFor="important">Important?</label>
        </div>
        <div className="addtask addtask-date">
          <label className="addtask-date__label" htmlFor="date">Set finish date: </label>
          <input className="addtask-date__input" type="date" value={this.state.date} min={minDate} max={maxDate} id="date" onChange={this.handleSetDate} />
          <button className="addtask-date__btn" onClick={this.handleAddTaskButton} name='add task'>+</button>
        </div>
      </div>
    );
  }
}
export default AddTask;