import React from 'react'
import "./Task4.css"

export default function Task4({name,age,location}) {
  return (
    <div className='usercard'>
      <h3 className='userdetail'>name:{name}</h3>
      <p className='userdetail'>age:{age}</p>
      <p className='userdetail'>location:{location}</p>
    </div>
  )
}
