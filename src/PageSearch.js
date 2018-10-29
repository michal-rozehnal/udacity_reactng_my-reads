import React, { Component } from 'react'
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI'

class PageSearch extends Component {
  state = {
    foundBooks: []
  }

  searchBook = (query) => {
    BooksAPI.search(query, 20).then((result) => (
      this.setState({
        foundBooks: result
      })
    ))
  }

  addBook = (book) => {
    this.props.addBook(book)
  }

  render() {
    return (
      <div>
        <input type="button" value="Search" onClick={(e) => this.searchBook("Hugo")} />
        <Link to='/'>Library</Link>
        {this.state.foundBooks.map((book) => (
            <li key={book.id}>
              <p>{book.id}</p>
              <input type="button" value="Add" onClick={() => this.addBook(book)}/>
            </li>
          )
        )}
      </div>
    )
  }
}

export default PageSearch
