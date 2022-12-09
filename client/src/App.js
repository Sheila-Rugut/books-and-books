// import logo from './logo.svg';
import './App.css';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import Login from './Login';
import NavBar from './NavBar';
import BookList from './BookList';
import NewBook from './NewBook';


function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
     
     Welcome to Books and Books
      <Router>
      <NavBar user={user} setUser={setUser}/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
        <main>
        <Routes>
          <Route path='/new' element={ <NewBook user={user} />} />
          <Route path="/" exact element={ <BookList/> } />
          
        </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;
