import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SearchPage from './SearchPage'
import LibraryPage from './LibraryPage'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  state = {
      data: []
  }

componentDidMount = () => {
  BooksAPI.getAll().then((data) => {
    console.log(data)
    this.setState({ data })
  })
}

updateShelf = (book, shelf) => {
  BooksAPI.update(book,shelf).then(() =>{
    book.shelf = shelf
    this.setState((state) =>({
      data: state.data.filter(b => b.id !== book.id).concat([book])
    }))
  })
}
  render() {
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <SearchPage
            updateShelf={this.updateShelf}
            saveHistory={() => {history.push('/')}}
          />
        )}/>
        <Route exact path='/' render={() => (
          <div>
            <LibraryPage
              data={this.state.data}
              updateShelf={this.updateShelf}
            />
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
