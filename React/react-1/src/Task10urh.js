import React, { useState, useRef } from "react";

export default function Task10urh() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0); 
  
  const increment = () => {
    setCount(count + 1);      
    renderCount.current += 1; 
  };

  return (
    <div>
    
      <h3> {count}</h3>
      <h3> {renderCount.current}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
