import React, { useState } from "react";

export default function Task5form() {
  const [inputtext, setinputtext] = useState("");

  const inputvalue = (e) => {
    e.preventDefault()
    console.log("Submitted with:", inputtext);
  };

  return (
    <div>
      <form>
        <input
          value={inputtext}
          placeholder="Type here"
          onChange={(e) => setinputtext(e.target.value)}
        />
      
      </form>
        <button onClick={inputvalue}>Submit</button>
      <p>{inputtext}</p>
    </div>
  );
}
