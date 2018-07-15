import React, { Component } from 'react'
import BookShelf from './BookShelf'

class LibraryPage extends Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              bookShelfTitle={'Currently Reading'}
              // data={this.filterBooks('currentlyReading')}
              data={this.props.data.filter((book) => {
                return (book.shelf === 'currentlyReading')
              })}
              updateShelf={this.props.updateShelf}
            />
            <BookShelf
              bookShelfTitle={'Want to Read'}
              // data={this.filterBooks('wantToRead')}
              data={this.props.data.filter((book) => {
                return (book.shelf === 'wantToRead')
              })}
              updateShelf={this.props.updateShelf}
            />
            <BookShelf
              bookShelfTitle={'Read'}
              // data={this.filterBooks('read')}
              data={this.props.data.filter((book) => {
                return (book.shelf === 'read')
              })}
              updateShelf={this.props.updateShelf}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LibraryPage
