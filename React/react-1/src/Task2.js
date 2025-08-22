import React from 'react'

export default function Task2() {
    const dynamicjsx="The primary mechanism for embedding dynamic data in JSX is the use of curly braces {}. Any valid JavaScript expression placed within these braces will be evaluated, and its result will be rendered in the corresponding position in the UI."
  return (
    <div>
      <h1>Welcome to jsx</h1>
      <p>What is dynamicjsx <br></br>
      ans  {dynamicjsx}</p>
    </div>
  )
}
