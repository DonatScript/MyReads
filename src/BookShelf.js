import React from 'react'
import Book from './Book'

function BookShelf (props) {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.bookShelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.data.length !== 0 && (
              props.data.map((book) => {
                return (
                  <li key={book.id}>
                    <Book book={book} updateShelf={props.updateShelf}/>
                  </li>)
              })
          )}
      </ol>
      </div>
    </div>
  )
}

export default BookShelf
