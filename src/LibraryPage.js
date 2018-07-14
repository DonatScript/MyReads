import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class LibraryPage extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      this.setState({ data })
    })
  }
  filterBooks(type){
    return (this.state.data.filter((book) => {
      return (book.shelf === type)
    }))
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf bookShelfTitle={'Currently Reading'}
              data={this.filterBooks('currentlyReading')}
            />
            <BookShelf bookShelfTitle={'Want to Read'}
              data={this.filterBooks('wantToRead')}
            />
            <BookShelf bookShelfTitle={'Read'}
              data={this.filterBooks('read')}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LibraryPage
