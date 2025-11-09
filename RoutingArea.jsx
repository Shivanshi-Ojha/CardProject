import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'

import FlipKart from '../Flipkart/FlipKart'
import CounterApp from '../Counter/CounterApp'
import GrandParent from '../DataServer/GrandParent'
import BasicCard from '../Basic Card/BasicCard'
import NoteApp from '../NoteTaskApp/NoteApp'

const RoutingArea = () => {
    const ways = createBrowserRouter([
      {path:"/" , element:<App/>, children:[
        {path:"/" , element:<FlipKart/>},
        {path:"/Counter" , element:<CounterApp/>},
        {path:"/GrandParent" , element:<GrandParent/>},
        {path:"/BasicCard" , element:<BasicCard/>},
        {path:"/NoteApp" , element:<NoteApp/>},
        
    
      ] }
    ])
  return (
    <RouterProvider router={ways}/>

  )
}

export default RoutingArea