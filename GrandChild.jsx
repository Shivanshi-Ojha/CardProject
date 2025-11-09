import React, { useContext } from 'react'
import { DataProvider } from './Store';

const GrandChild = () => {
  let {gold,land} = useContext(DataProvider)
  
  return (
    <div className='border text-center border-info p-5'>
        <h1>GrandChild </h1>
        <h1>I have{land} land</h1>
        <h1>I have {gold} gold</h1>
    </div>
  );
}

export default GrandChild