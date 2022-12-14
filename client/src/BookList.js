import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BookList({ onDeleteBook}) {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    fetch("/books")
      .then((r) => r.json())
      .then((books) => setBooks(books));
  }, []);

  function handleDeleteClick() {
    fetch("/books", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        // onDeleteBook(books);
        console.log(r)
      }
    });
  }
  return (
    <div>
    <div>
        {books.length > 0 ? (
        books.map((book) => (
          <div key={book.id}>
            <div>
              <h2>{book.title}</h2>
              <p>
                Author: {book.author}
              </p>
              <p>
              Genre: {book.genre} 
              </p>
              <p>Synopsis: {book.synopsis}</p>
            </div>
            <button className="del-btn" onClick={handleDeleteClick} >
        Delete Book
      </button>
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
     
    </div>
  )
}
