import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageLibrary from './PageLibrary';
import PageSearch from './PageSearch';

class App extends React.Component {
  state = {
    books: []
  }

  addBook = (book) => {
    BooksAPI.update(book, 'read').then((result) => {
      this.setState((current) => ({
        books: current.books.concat([book])
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
        <div>
          <Route exact path='/' render={() => (<PageLibrary books={this.state.books}/>)} />
          <Route path='/search' render={() => (<PageSearch addBook={this.addBook}/>)} />
        </div>
      </Router>
    )
  }
}

export default App
