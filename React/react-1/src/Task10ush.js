import React from 'react'
import { useState } from 'react';

export default function Task10ush() {
    const [count, setcount] = useState(0);

    const increasecount=()=>
    {
        setcount(count +1)
    }
    const decreasecount=()=>
    {
        setcount(count-1)
    }
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={increasecount}>+</button>
        <button onClick={decreasecount}>-</button>


    </div>
  )
}
