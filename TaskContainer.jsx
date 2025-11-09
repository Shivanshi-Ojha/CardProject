import React from 'react'
import Task from './Task'

const TaskContainer = ({ taskList }) => {
  return (
    <ul className="">
      {taskList.map((elm, ind) => (
        <li className="list-group-item my-2">
          <Task elm={elm} />
        </li>
      ))}
    </ul>
  );
};

export default TaskContainer