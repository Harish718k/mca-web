import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import { Homepage } from './components/Homepage'
import { Department_mca } from './components/Department_mca'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='Department/mca' element={<Department_mca />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
