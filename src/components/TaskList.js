import React from 'react';
import Task from './Task';
import '../Sass/_TaskList.scss';


const TaskList = ({tasks,removeTask,taskStatus}) => {
  const active = tasks.filter(task => task.active);
  const done = tasks.filter(task => !task.active)

  active.sort((a, b) => {
    a = a.txt.toLowerCase();
    b = b.txt.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  })
  done.sort((a, b) => b.finishDate - a.finishDate);
 
  const activeTasks = active.map(task => <Task key={task.id} task={task} remove={removeTask} status={taskStatus} />)
  const doneTasks = done.map(task => <Task key={task.id} task={task} remove={removeTask} status={taskStatus} />)
  return (
    <>
      <div className="tasks-list-container">
        <div className="active">
          {activeTasks.length > 0 ? <h3 className='active__title'>Tasks to do {activeTasks.length}</h3> : <h3 className='active__title-conditional'>No tasks to do</h3>}
          {activeTasks}
        </div>
        <div className="done">
          {doneTasks.length > 0 ? <h3 className='done__title'>Finished tasks {doneTasks.length}</h3> : null}
          {doneTasks}
        </div>
      </div>
    </>
  );
}
export default TaskList;

