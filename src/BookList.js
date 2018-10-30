import React from 'react'
import Book from './Book'

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

export default BookList
