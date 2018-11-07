import React from 'react'
import BookActionMenu from './BookActionMenu'
import PropTypes from 'prop-types'
import { shelves } from './AppSettings'

const Book = (props) => {
  var { shelf, book, bookAction} = props;

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.cover }}></div>
        <BookActionMenu book={book} shelf={shelf} bookAction={bookAction}/>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.author}</div>
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    shelf: PropTypes.oneOf(shelves.map(s => s.value)).isRequired
  }).isRequired,
  shelf: PropTypes.oneOf(shelves.map(s => s.value)).isRequired,
  bookAction: PropTypes.func.isRequired
}

export default Book
