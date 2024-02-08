import React, { useState, useEffect } from "react";
import "../App.css";

const BookList = ({ searchText }) => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://reactnd-books-api.udacity.com/books",
          {
            headers: {
              Authorization: "whatever-you-want",
            },
          }
        );
        const data = await response.json();
        setBooks(data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredBooks(filtered);
  }, [searchText, books]);

  const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <h1>Book List</h1>
      <ul className="books">
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <div className="book" onClick={() => openModal(book)}>
              <img src={book.imageLinks.thumbnail} alt={book.title} />
              <div>
                <h4>{book.title}</h4>
                <p>Free</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {selectedBook && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedBook.title}</h2>
            <p id="modalText">{selectedBook.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList;
