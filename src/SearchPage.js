import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {
  state = {
    validationText: true,
    data: []
  }

  searchBook(text) {
    if(text.length !== 0){
      BooksAPI.search(text).then((data) => {
        if(data.length > 0){
          this.setState({
            validationText: true,
            data: data
          })
        }
      }).catch((err) => {
        console.log(err)
        this.setState({
          validationText: false
        })
      })
    }else{
      this.setState({
        validationText: false
      })
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            onClick={this.props.saveHistory}
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
            {this.state.validationText && (
              this.state.data.filter((book) => {
                return (book.imageLinks !== undefined && book.authors !== undefined)
              }).map((book) => {
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
