import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import LibraryPage from './LibraryPage'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      this.setState({ data })
    })
  }
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
        <Route path='/search' render={({ history }) => (
          <SearchPage
            onSearch={() => {
              history.push('/')
            }}
          />
        )}/>
      ) : (
        <Route exact path='/' render={() => (
          <div>
          <LibraryPage

          />
          <div className="open-search">
            <Link
              to='/search'
              onClick={() => this.setState({ showSearchPage: true })}
              >Add a book</Link>
          </div>
        </div>
        )}/>
      )}
      </div>
    )
  }
}

export default BooksApp
