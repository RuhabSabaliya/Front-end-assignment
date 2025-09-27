import React from "react";

export default function Task7li() {
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

  return (
    <div>
      <ul>
        {fruits.map((fruit,index) => (
          <li key={index}>
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}
