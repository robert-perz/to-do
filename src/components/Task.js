import React from 'react';
import '../Sass/_Task.scss';

const Task = ({ status, remove, task }) => {
  const importantStyle = {
    color: '#ff1493'
  }
  const { txt, date, id, active, important, finishDate } = task
  if (active) {
    return (
      <div className="activetask">
        <p style={important ? importantStyle : null} className='activetask__txt'><span className='activetask__txt-span'>{txt}</span></p>
        <div className='activetask__finish-date'>Do to : {date}</div>
        <button onClick={() => status(id)} className="activetask__done-btn">Finished</button>
        <button onClick={() => remove(id)} className="activetask__delete-btn">Delete</button>
      </div>
      );
  } else {
    const finish = new Date(finishDate).toISOString().slice(0, 10);
    return (
      <div className='donetask'>
        <p className='donetask__txt'><span className='donetask__txt-span'>{txt}</span></p>
        <div className='donetask__start-date'>Do to: {date}</div>
        <span className='donetask__finish-date'>End: {finish}</span>
        <button onClick={() => remove(id)} className="donetask__delete-btn">Delete</button>
      </div>
    )
  }
}
export default Task;