import React, { Component } from 'react'
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import PropTypes from 'prop-types'
import { libraryShelves} from './AppSettings'

class PageSearch extends Component {
  state = {
    foundBooks: []
  }

  searchBook = (query, libraryBooks) => {
    BooksAPI.search(query, 20).then((result) => {
      this.setState({
        foundBooks: result.map((book) => {
          var libraryBook = libraryBooks.find((b) => (b.id === book.id))

          return {
            id: book.id,
            cover: 'url('+book.imageLinks.thumbnail+')',
            title: book.title,
            author: book.authors ? book.authors.join('; ') : null,
            shelf: libraryBook ? libraryBook.shelf : 'none'
          }
        })
      })
    })
  }

  addBook = (book, shelf) => {
    this.props.addBook(book, shelf)

    // create deep copy
    var foundedBooksNew = JSON.parse(JSON.stringify(this.state.foundBooks))
    foundedBooksNew.find((b) => (b.id === book.id)).shelf = shelf

    this.setState((current) => ({
      foundBooks: foundedBooksNew
    }))
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
              <Link to='/' className='close-search'>Close</Link>
              <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" onChange={(e) => this.searchBook(e.target.value, this.props.libraryBooks)} />
              </div>
          </div>
          <div className="search-books-results">
              <BookList shelf='none' books={this.state.foundBooks} bookAction={this.addBook}/>
          </div>
      </div>
    )
  }
}

PageSearch.propTypes = {
  libraryBooks: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    shelf: PropTypes.oneOf(libraryShelves.map(s => s.value)).isRequired
  })).isRequired,
  addBook: PropTypes.func.isRequired
}

export default PageSearch
