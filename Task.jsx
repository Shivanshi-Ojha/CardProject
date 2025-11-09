import React from 'react'

const Task = ({elm:{work,workDate}}) => {
  return (
    <div className="row align-items-center">
      <div className="col-5">{work}</div>
      <div className="col-5">{workDate}</div>
      <div className="col-2"><button className='btn btn-danger'>Delete</button></div>
    </div>
  );
}

export default Task