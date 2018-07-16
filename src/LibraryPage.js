import React, { Component } from 'react'
import BookShelf from './BookShelf'

class LibraryPage extends Component {

  filterShelf = (type) => {
    return (this.props.data.filter((book) => {
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
            <BookShelf
              bookShelfTitle={'Currently Reading'}
              data={this.filterShelf('currentlyReading')}
              updateShelf={this.props.updateShelf}
            />
            <BookShelf
              bookShelfTitle={'Want to Read'}
              data={this.filterShelf('wantToRead')}
              updateShelf={this.props.updateShelf}
            />
            <BookShelf
              bookShelfTitle={'Read'}
              data={this.filterShelf('read')}
              updateShelf={this.props.updateShelf}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LibraryPage
