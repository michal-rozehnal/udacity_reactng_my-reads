import React from 'react'
import PropTypes from 'prop-types'
import { shelves } from './AppSettings'

const BookActionMenu = (props) => {
  var {book, shelf, bookAction} = props;

  const onBookAction = (book, oldShelf, newShelf) => {
    if (oldShelf !== newShelf) {
      bookAction(book, newShelf);
    }
  }

  return (
    <div className="book-shelf-changer">
      <select value={book.shelf} onChange={(e) => onBookAction(book, shelf, e.target.value)}>
        <option value="move" disabled>Move to...</option>
        {shelves.map(shelf => (
          <option key={shelf.value} value={shelf.value}>{shelf.name}</option>
        ))}
      </select>
    </div>
  )
}

BookActionMenu.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    shelf: PropTypes.oneOf(shelves.map(s => s.value)).isRequired
  }).isRequired,
  shelf: PropTypes.oneOf(shelves.map(s => s.value)).isRequired,
  bookAction: PropTypes.func.isRequired
}

export default BookActionMenu
