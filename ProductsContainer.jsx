import React, { useRef, useState } from 'react'
import Products from './Products'
import {data} from"./ProductsData.js"
const ProductsContainer = () => {
  // use Ref
  let myInpVal = useRef()
  const [inpVal,setinpVal]=useState("")
  const [productList,setProductList]= useState(data);

  const handleBtn=()=>{
  let updateList =  data.filter(
      (elm)=> elm.title.toLowerCase().includes(inpVal.toLowerCase())
    );
      setProductList(updateList)
 setinpVal("")
console.log(myInpVal.current.value)

// let updateList =data.filter()
  }
  return (
    <div className='container'>
      <div className='my-2'>
      <input type='text' value={inpVal} className='input' placeholder='Enter the Product Name' onChange={(e)=>setinpVal(e.target.value)}></input>
       <button className='btn btn-secondary mx-3 px-3' onClick={handleBtn}>Search</button>
      </div>
        <div className="row">
        {productList.map((elm,ind)=><Products elm={elm}/>)}
        </div>
    </div>
  )
}

export default ProductsContainer