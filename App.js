// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  const [books, setBooks] = useState([]); // Initial state for books

  // Function to add a new book
  const handleAddBook = (newBook) => {
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/all-books" element={<BookList books={books} />} />
          <Route path="/to-read" element={<BookList books={books.filter(book => book.status === 'To Read')} />} />
          <Route path="/read" element={<BookList books={books.filter(book => book.status === 'Read')} />} />
        </Routes>
        <BookForm onAddBook={handleAddBook} />
      </div>
    </Router>
  );
}

export default App;
