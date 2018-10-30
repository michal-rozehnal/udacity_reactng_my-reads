import React, { Component } from 'react'
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'

class PageSearch extends Component {
  state = {
    foundBooks: []
  }

  searchBook = (query) => {
    BooksAPI.search(query, 20).then((result) => {
      this.setState({
        foundBooks: result.map((book) => ({
          id: book.id,
          cover: 'url('+book.imageLinks.thumbnail+')',
          title: book.title,
          author: book.authors ? book.authors.join('; ') : null,
          shelf: book.shelf
        }))
      })
    })
  }

  addBook = (book, shelf) => {
    this.props.addBook(book, shelf)

    book.shelf = shelf;
    this.setState((current) => ({
      books: current.foundBooks.filter((b) => (b.id !== book.id)).concat([book])
    }))
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
              <Link to='/' className='close-search'>Close</Link>
              <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" onChange={(e) => this.searchBook(e.target.value)} />
              </div>
          </div>
          <div className="search-books-results">
              <BookList shelf='none' books={this.state.foundBooks} bookAction={this.addBook}/>
          </div>
      </div>
    )
  }
}

export default PageSearch
