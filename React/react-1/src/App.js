import React from 'react'
import { BrowserRouter as Router,Routes,Route ,Link } from 'react-router-dom'
import Task1 from './Task1'
import Task2 from './Task2'
import Task3 from './Task3'
import Task3rcc from './Task3rcc'
import Task4 from './Task4'
import Task4Counter from './Task4Counter'
import Task5form from './Task5form'
import Task5button from './Task5button'
import Task6Login from './Task6Login'
import Task6Ageverif from './Task6Ageverif'
import Task7li from './Task7li'
import Task7userli from './Task7userli'
import Task8form from './Task8form'
import Task8formvalid from './Task8formvalid'
import Task10ush from './Task10ush'
import Task10ueh from './Task10ueh'
import Task10urh from './Task10urh'
import Home from './Home'
import Aboutus from './Aboutus'
import Contactus from './Contactus'

export default function App() {
  return (
    <div>
      <Router>
        <Link to={'/Home'}>Home</Link>
        <Link to={'/Aboutus'}>Aboutus</Link>
        <Link to={'/Contactus'}>Contactus</Link>
        <Routes>
          <Route path='/Home' element={<Home></Home>}></Route>
            <Route path='/Aboutus' element={<Aboutus></Aboutus>}></Route>
            <Route path='/Contactus' element={<Contactus></Contactus>}></Route>
        </Routes>
      </Router>
      <Task1></Task1>
      <Task2></Task2>
      <Task3 name="Roohab"></Task3>
      <Task3rcc></Task3rcc>
      <Task4 name="Roohab" age={21} location="Ahmedabad"></Task4>
      <Task4Counter></Task4Counter>
      <Task5button></Task5button>
      <Task5form></Task5form>
      <Task6Login></Task6Login>
      <Task6Ageverif></Task6Ageverif>
      <Task7li></Task7li>
      <Task7userli></Task7userli>
      <Task8form></Task8form>
      <Task8formvalid></Task8formvalid>
      <Task10ush></Task10ush>
      <Task10ueh></Task10ueh>
      <Task10urh></Task10urh>
    </div>
  )
}
