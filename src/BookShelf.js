import React from 'react'
import BookList from './BookList'
import PropTypes from 'prop-types'
import { shelves, libraryShelves} from './AppSettings'

const BookShelf = (props) => {
  var {shelf, books, moveBook} = props;

  return(
    <div className="bookshelf">
    	<h2 className="bookshelf-title">{shelf.name}</h2>
    	<div className="bookshelf-books">
    		<BookList shelf={shelf.value} books={books} bookAction={moveBook} />
    	</div>
    </div>
  )
}

BookShelf.propTypes = {
  books: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    shelf: PropTypes.oneOf(shelves.map(s => s.value)).isRequired
  })).isRequired,
  shelf: PropTypes.exact({
    value: PropTypes.oneOf(libraryShelves.map(s => s.value)).isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  moveBook: PropTypes.func.isRequired
}

export default BookShelf
