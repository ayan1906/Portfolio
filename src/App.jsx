import React from 'react'
import DotField from './components/DotField'
import {  RouterProvider } from 'react-router-dom'
import { Router } from './routes/Routes'

const App = () => {
  return (


    <RouterProvider router={Router}/>
  )
}

export default App