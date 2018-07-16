import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {
  state = {
    searchText: '',
    data: []
  }
  unique = (array) => {
      var a = array.concat();
      for(var i=0; i<a.length; ++i) {
          for(var j=i+1; j<a.length; ++j) {
              if(a[i].id === a[j].id)
                  a.splice(j--, 1);
          }
      }

      return a;
  }
  searchBook = (text) => {
    if(text.length > 0){
      BooksAPI.search(text).then((data) => {
        const tempBooks = this.props.data.filter((bookFromLibrary) => {
          return data.map((bookFromSearch) => {
            return (bookFromLibrary.id === bookFromSearch.id)
         })
        })
        console.log(this.unique([...tempBooks , ...data]).map(b => b.id));
        this.setState((state) =>({
          searchText: text,
          data: this.unique([...tempBooks , ...data])
        }))
      }).catch((err) => {
        console.log(err)
        this.setState({
          searchText: '',
          data: []
        })
      })
    }else{
      this.setState({
        searchText: '',
        data: []
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
            {this.state.searchText.length > 1 &&
              this.state.data.length && (
              this.state.data.filter((book) => {
                return (book.imageLinks !== undefined && book.authors !== undefined)
              }).map((book) => {
                return (
                  <li key={book.id}>
                    <Book book={book} updateShelf={this.props.updateShelf}/>
                  </li>)
              })
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
