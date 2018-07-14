import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SearchPage from './SearchPage'
import LibraryPage from './LibraryPage'
import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <SearchPage />
        )}/>
        <Route exact path='/' render={() => (
          <div>
            <LibraryPage />
            <div className="open-search">
              <Link
                to='/search'
                >Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
