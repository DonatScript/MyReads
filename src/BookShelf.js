import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BookShelf extends Component {

  state = {
    data: []
  }

  updateShelf(book, shelf) {
    console.log(book,shelf)
    BooksAPI.update(book,shelf).then((data) =>{
      console.log(data)
      this.setState({ data })
    })
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.bookShelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.data.length !== 0 && (
                this.props.data.map((book) => {
                  return (
                    <li key={book.id}>
                      <Book book={book} updateShelf={this.updateShelf}/>
                    </li>)
                })
            )}
        </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
