import React, { useState } from "react";

export default function Task8form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
        <h2>Task8.1</h2>
      <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
      </form>
<button onClick={handleSubmit}>Submit</button>

      {submittedData && (
        <li>
          <p><b>Name:</b> {submittedData.name}</p>
          <p><b>Email:</b> {submittedData.email}</p>
          <p><b>Password:</b> {submittedData.password}</p>
          </li>
      )}
    </div>
  );
}
