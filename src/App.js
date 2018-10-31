import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageLibrary from './PageLibrary';
import PageSearch from './PageSearch';

const shelves = [
  {
    name: 'Currently Reading',
    value: 'currentlyReading'
  },
  {
    name: 'Want to Read',
    value: 'wantToRead'
  },
  {
    name: 'Read',
    value: 'read'
  }
]

class App extends React.Component {
  state = {
    books: []
  }

  addBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((result) => {
      this.setState((current) => {
        book.shelf = shelf
        if (book.shelf === 'none') {
          return {
            books: current.books.concat([book])
          }
        } else {
          return {
            books: current.books.filter((b) => (b.id !== book.id)).concat([book])
          }
        }
      })
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((result) => {
      book.shelf = shelf
      this.setState((current) => ({
        books: current.books.filter((b) => (b.id !== book.id)).concat([book])
      }))
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((result) => {
      this.setState({
        books: result.map((book) => ({
          id: book.id,
          cover: 'url('+book.imageLinks.thumbnail+')',
          title: book.title,
          author: book.authors.join('; '),
          shelf: book.shelf
        }))
      })
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path='/' render={() => (<PageLibrary books={this.state.books} shelves={shelves} moveBook={this.moveBook}/>)} />
          <Route path='/search' render={() => (<PageSearch libraryBooks={this.state.books} addBook={this.addBook}/>)} />
        </div>
      </Router>
    )
  }
}

export default App
