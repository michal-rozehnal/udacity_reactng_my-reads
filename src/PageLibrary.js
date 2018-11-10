import React from 'react';
import { Link } from "react-router-dom";
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'
import { shelves, libraryShelves} from './AppSettings'

const PageLibrary = (props) => {
  var {books, shelves, moveBook} = props;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map(shelf => (
            <BookShelf key={shelf.value} shelf={shelf} books={books.filter((book) => book.shelf === shelf.value)} moveBook={moveBook}/>
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  )
}

PageLibrary.propTypes = {
  books: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    shelf: PropTypes.oneOf(shelves.map(s => s.value)).isRequired
  })).isRequired,
  shelves: PropTypes.arrayOf(PropTypes.exact({
    value: PropTypes.oneOf(libraryShelves.map(s => s.value)).isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  moveBook: PropTypes.func.isRequired
}

export default PageLibrary
