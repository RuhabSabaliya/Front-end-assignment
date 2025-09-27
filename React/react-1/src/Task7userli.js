import React from "react";

export default function Task7userli() {
  const users = [
    { id: 1, name: "Alice", age: 22 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 30 },
    { id: 4, name: "Diana", age: 27 },
  ];

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} — {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}
