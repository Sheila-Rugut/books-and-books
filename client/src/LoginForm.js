import React, { useState } from "react";

// import Signup from './Signup'

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  
  function handleSubmit(e) {
    
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user))

      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    });
  }
  if (!errors) {
    return null
}

  return (
    
      
    <form className='main' onSubmit={handleSubmit} >
      <div className='sub-main'>
        <h3>Login</h3>
        <div className="mb-3">
          <label>Enter username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
          {isLoading ? "Loading..." : "Login"}
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

export default LoginForm