import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router";

export default function NewBook({user}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
 
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        author,
        genre,
        synopsis,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        navigate("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  if (!errors) {
    return null
}
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="book-name">Title</label>
      <input 
      id="title" 
      type="text" 
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="book-author">Author</label>
      <input 
      id="author" 
      type="text" 
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="book-genre">Genre</label>
      <input 
      id="genre" 
      type="text" 
      value={genre}
      onChange={(e) => setGenre(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="book-synopsis">Synopsis</label>
      <input 
      id="synopsis" 
      type="text" 
      value={synopsis}
      onChange={(e) => setSynopsis(e.target.value)}
      />
    </div>
    <div>
      <button>
      {isLoading ? "Loading..." : "Add Book"}
      </button>
    </div>
    <div classname='alert' >
    {errors.map((err) => (
             <div key={err}> {err}</div>
            ))}
    </div>
  </form>
  )
}
