import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books")
      .then((r) => r.json())
      .then(setBooks);
  }, []);
  return (
    <div>
        {books.length > 0 ? (
        books.map((book) => (
          <div key={book.id}>
            <div>
              <h2>{book.title}</h2>
              <p>
                <em>Author: {book.author} </em>
                <em>Genre: {book.genre}</em> 
              </p>
              <p>Synopsis: {book.synopsis}</p>
            </div>
          </div>
        ))
      ) : (
        <>
          <h2>No Books Found</h2>
          <button as={Link} to="/new">
            Add Book
          </button>
        </>
      )}
    </div>
  )
}
