import React, { useState } from "react";

export default function Task6Login() {
  const [Login, setLogin] = useState(false);

  return (
    <div>
      {Login ? "welcome Back" : "Please Login"}
      {Login ? (
        <button onClick={() => setLogin(false)}>LogOut</button>
      ) : (
        <button onClick={() => setLogin(true)}>LogIn</button>
      )}
    </div>
  );
}
