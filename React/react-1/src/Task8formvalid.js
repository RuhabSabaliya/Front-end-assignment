import React, { useState } from "react";

export default function Task8formvalid() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Name is required");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    setSubmittedData({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Task8.1 with validation</h2>
      <form>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
