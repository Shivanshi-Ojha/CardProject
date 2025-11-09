import React, { useContext } from 'react'
import GrandChild from './GrandChild'
import { DataProvider } from './Store';

const Child = () => {
  const {land} =useContext(DataProvider)
  return (
    <div className='border text-center border-info p-5'>
        <h1>Child</h1>
        <h1>I have {land} land</h1>
        <h1> have gold</h1>
        <GrandChild />
    </div>
  );
}

export default Child