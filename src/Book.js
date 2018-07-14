import React, { Component } from 'react'
import Menue from './Menue'

class Book extends Component {
  state = {
    shelf: ''
  }
  render() {
    return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
              // style={{ width: 128, height: 193 }}>
                style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}> 

            </div>
            <div className="book-shelf-changer">
              <Menue shelf={this.state.shelf}/>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
    )
  }
}

export default Book
