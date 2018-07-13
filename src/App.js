import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import LibraryPage from './LibraryPage'
import './App.css'

class BooksApp extends React.Component {
  state = {
    data: {}
  }
  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      this.setState({ data })
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  }

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
