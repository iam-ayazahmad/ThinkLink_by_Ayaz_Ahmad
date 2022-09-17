
import './App.css'
import { Mainbox } from './Components/Mainbox/Mainbox'
import { Navbar } from './Components/Navbar/Navbar'
import { Sidebar } from './Components/Sidebar/Sidebar'

function App() {
  

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='bigbox'><Sidebar></Sidebar><Mainbox></Mainbox></div>
      
      
      

    </div>
  )
}

export default App
