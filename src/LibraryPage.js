import React, { Component } from 'react'
import BookShelf from './BookShelf'

class LibraryPage extends Component {

  state = {

  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf bookShelfTitle={'Currently Reading'} data={this.props.data}/>
            <BookShelf bookShelfTitle={'Want to Read'} data={this.props.data}/>
            <BookShelf bookShelfTitle={'Read'} data={this.props.data}/>
          </div>
        </div>
      </div>
    )
  }
}

export default LibraryPage
