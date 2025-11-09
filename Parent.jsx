import React, { useContext } from 'react'
import Child from './Child'
import { DataProvider } from './Store';

const Parent = () => {
  const {gold} = useContext(DataProvider)
  return (
    <div className='border text-center border-info p-5'>
      <h1>Parent</h1>
      <h1>I have {gold} gold</h1>
      <h1>I have land</h1>
      <Child />
      </div>
  );
}

export default Parent