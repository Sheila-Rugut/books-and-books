import React, { useState } from "react";
// import { useNavigate } from 'react-router'

export default function Signup({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // let navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json()
        .then((user) => onLogin(user));
        
      } else {
        r.json().then((err) => setErrors(err.errors || [err.error]));
      }
    });
  }
  if (!errors) {
    return null
}

  return (
    <form className='sign-up' onSubmit={handleSubmit}>
      <div className='form1'>
    <h3>Sign Up</h3>
    <div className="mb-3">
      <label>Username</label>
      <input
        type="text"
        id="username"
        className="form-control"
        placeholder="Username"
        value={username}
          onChange={(e) => setUsername(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label>Email</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        value={email}
          onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
          onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label>Confirm password</label>
      <input type="text" 
      className="form-control" 
      placeholder="Confirm password"
      id="password_confirmation"
      value={passwordConfirmation}
      onChange={(e) => setPasswordConfirmation(e.target.value)}
           />
    </div>
    <div className="d-grid">
          <button type="submit" className="btn btn-primary">
          {isLoading ? "Loading..." : "Sign up"}
          </button>
        </div>
        <div classname='alert' >
    {errors.map((err) => (
             <div key={err}> {err}</div>
            ))}
    </div>
    </div>
  </form>
  )
}
