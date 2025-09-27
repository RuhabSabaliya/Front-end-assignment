import React, { useState } from 'react'

export default function Task6Ageverif() {
const [age, setage] = useState('');

    const ageverification=(age)=>
    {
        
        console.log("Age Verified")

        if(Number(age>=18))
        {
            alert("You are eligable for vote")
        }
        else if(age==='')
        {
            alert("Please enter the age")
        }
        else
        {
            alert("You are Not eligable for vote")
        }
    }
  return (
    <div>
        <form>
            <input value={age} placeholder='EnterAge' onChange={(e)=>{setage(e.target.value)}}></input>
        </form>
        <button onClick={()=>ageverification(age)}>Check Veification</button>
    </div>
  )
}
