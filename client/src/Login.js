import Signup from "./Signup"
import LoginForm from "./LoginForm"
import { useState } from "react";

function Login({onLogin}) {
    const [showLogin, setShowLogin] = useState(true);
  return (
    <div>Books and Books
     {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <div />
          <p>
            Don't have an account? &nbsp;
            <button type="submit" className="btn btn-primary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <Signup onLogin={onLogin} />
          <div />
          <p>
            Already have an account? &nbsp;
            <button type="submit" className="btn btn-primary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  )
}

export default Login