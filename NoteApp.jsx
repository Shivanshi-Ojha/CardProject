import React, { useState } from 'react'
import AppName from './AppName'
import AddTaskFrame from './AddTaskFrame'
import TaskContainer from './TaskContainer'

const NoteApp = () => {
    const [taskList, setTaskList] = useState([
      { work: "tere gHar Aunga", workDate: "12/12/2025" },
      { work: "ter gHar k samne tambu lgaunga", workDate: "12/12/2026" },
    ]);
    const handleAdd = ()=>{
            alert("add Fun run")
    }
  return (
    <div className="container">
      <div className="row border">
        <div className="col-10 mx-auto text-center">
          <AppName />
          <AddTaskFrame handleAdd={handleAdd} />
          <TaskContainer taskList={taskList} />
        </div>
      </div>
    </div>
  );
}

export default NoteApp