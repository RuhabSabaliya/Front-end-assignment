import React, { useState } from 'react'
import "./Task4counter.css"

export default function Task4Counter() {
let [x,y]=useState(0)   
function increase()
{
    y(x+1)
}
        
  return (
    <div>
      <h2 className='count-display'>{x}</h2>
      <button className='count-increase-button' onClick={increase}>Increase</button>
    </div>
  )
}
