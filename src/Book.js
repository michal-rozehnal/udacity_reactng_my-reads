import React from 'react'
import BookActionMenu from './BookActionMenu'

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

export default Book
