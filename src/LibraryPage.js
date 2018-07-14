import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class LibraryPage extends Component {
  state = {
    booksWantToRead: [],
    booksCurrentlyReading: [],
    booksRead: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      this.setState({
        booksCurrentlyReading: data.filter((book) => {return (book.shelf === 'currentlyReading')}),
        booksWantToRead: data.filter((book) => {return (book.shelf === 'wantToRead')}),
        booksRead: data.filter((book) => {return (book.shelf === 'read')})
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf bookShelfTitle={'Currently Reading'} data={this.state.booksCurrentlyReading}/>
            <BookShelf bookShelfTitle={'Want to Read'} data={this.state.booksWantToRead}/>
            <BookShelf bookShelfTitle={'Read'} data={this.state.booksRead}/>
          </div>
        </div>
      </div>
    )
  }
}

export default LibraryPage
