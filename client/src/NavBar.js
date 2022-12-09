   import React from 'react'
   import { NavLink} from "react-router-dom";
   import './index.css'
   
   const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 10px 10px",
    background: "pink",
    textDecoration: "none",
    color: "white",
  };
  
  function NavBar({ user, setUser }) {
    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }
    return (
      <div className='nav'>
        {/* <NavLink
          to="/"
          exact
          style={linkStyles}
        >
          Books and Books
        </NavLink> */}
       
        <NavLink
          to="/new"
          exact
          style={linkStyles}  
        >
        Add Book
        </NavLink>
        <NavLink
          to="/new"
          exact
          style={linkStyles}
         
        onClick = {handleLogoutClick}>
          Logout
        </NavLink>
      </div>
    );
  }
  
  export default NavBar;
   