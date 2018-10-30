import React from 'react'
import BookList from './BookList'

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

export default BookShelf
