import React, { Component } from 'react'
import Menue from './Menue'

class Book extends Component {
  state = {
    shelf: ''
  }
  render() {
    return (
      <ol className="books-grid">
        <li key={this.props.book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover"
                style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}>

              </div>
              <div className="book-shelf-changer">
                <Menue shelf={this.state.shelf}/>
              </div>
            </div>
            <div className="book-title">{this.props.title}</div>
            <div className="book-authors">{this.props.authors}</div>
          </div>
        </li>
      </ol>
    )
  }
}

export default Book
