import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {
  state = {
    data: []
  }

  searchBook(text) {
    BooksAPI.search(text).then((data) => {
      this.setState({ data })
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to='/'
            >Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */
            }
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.searchBook(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {console.log(this.state.data.length)}
            {this.state.data.length !== 0 && (
              this.state.data.map((book) => {
                return (<li key={book.id}><Book book={book}/></li>)
              })
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
