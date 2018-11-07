import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import { shelves } from './AppSettings'

const BookList = (props) => {
  var {shelf, books, bookAction} = props;

  return(
    <ol className="books-grid">
  		{books.map((book, i) => (
  			<li key={book.id}>
  				<Book shelf={shelf} book={book} bookAction={bookAction}/>
  			</li>
  		))}
		</ol>
  )
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    shelf: PropTypes.oneOf(shelves.map(s => s.value)).isRequired
  })).isRequired,
  shelf: PropTypes.oneOf(shelves.map(s => s.value)).isRequired,
  bookAction: PropTypes.func.isRequired
}

export default BookList
