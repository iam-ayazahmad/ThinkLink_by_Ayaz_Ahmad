import { useState } from 'react'

import './App.css'
import {Navbar} from "./Components/Navbar/Navbar"
 import {Sidebar} from "./Components/Sidebar/Sidebar"
 import {Mainbox} from "./Components/Mainbox/Mainbox"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Mainbox></Mainbox>
      
    
      
    </div>
  )
}

export default App
