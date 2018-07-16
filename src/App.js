import React from 'react'
import { Switch, Route } from 'react-router-dom'
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
        <Switch>
          <Route path='/search' render={({ history }) => (
            <SearchPage
              data={this.state.data}
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
        </Switch>
      </div>
    )
  }
}

export default BooksApp
