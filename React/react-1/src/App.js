import React from 'react'
import Task1 from './Task1'
import Task2 from './Task2'
import Task3 from './Task3'
import Task3rcc from './Task3rcc'
import Task4 from './Task4'
import Task4Counter from './Task4Counter'

export default function App() {
  return (
    <div>
      <Task1></Task1>
      <Task2></Task2>
      <Task3 name="Roohab"></Task3>
      <Task3rcc></Task3rcc>
      <Task4 name="Roohab" age={21} location="Ahmedabad"></Task4>
      <Task4Counter></Task4Counter>
    </div>
  )
}
