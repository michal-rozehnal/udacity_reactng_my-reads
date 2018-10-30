import React from 'react';
import { Link } from "react-router-dom";

const PageLibrary = (props) => {
  return (
    <div>
      <h2>Library</h2>
        <ol>
          {props.books.map((book) => (<li key={book.id}>{book.title}</li>))}
        </ol>
      <Link to='/search'>Search</Link>
    </div>
  )
}

export default PageLibrary
