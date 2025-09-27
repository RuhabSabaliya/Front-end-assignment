import React, { useState } from 'react'

export default function Task5button() {
    const[text,settext]=useState('Not clicked')

    const clicked=()=>
    {
        settext("clicked")
    }
  return (
    <div>
   <button onClick={clicked}>{text}</button>
   </div>
  )
}
