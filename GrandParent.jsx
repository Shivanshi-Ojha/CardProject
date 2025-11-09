import React from 'react'
import Parent from './Parent'
import { DataProvider } from './Store';

const GrandParent = () => {
    let gold = "'100kg'"
let land = "'100 bigha'"
  return (
    <DataProvider value={{gold,land}}>
      <div className='border text-center border-info p-5'>
        <h1>GrandParent</h1>
        <Parent gold ={gold}/>
        </div>
    </DataProvider>
  );
}

export default GrandParent