import React from 'react'

const AddTaskFrame = ({ handleAdd }) => {
  return (
    <div className="row  d-flex justify-content-center my-2">
      <div className="col-5">
        <input type="text" className="form-control" />
      </div>
      <div className="col-5">
        <input type="date" className="form-control" />
      </div>
      <div className="col-2 text-center">
        <button className="btn btn-success px-5" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTaskFrame