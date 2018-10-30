import React from 'react'

const BookActionMenu = (props) => {
  var {book, shelf, bookAction} = props;

  const onBookAction = (book, oldShelf, newShelf) => {
    if (oldShelf !== newShelf) {
      bookAction(book, newShelf);
    }
  }

  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={(e) => onBookAction(book, shelf, e.target.value)}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

export default BookActionMenu
