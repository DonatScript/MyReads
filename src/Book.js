import React, { Component } from 'react'
import Controller from './Controller'

class Book extends Component {

  render() {
    return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
              // style={{ width: 128, height: 193 }}>
                style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}>

            </div>
            <div className="book-shelf-changer">
              <Controller book={this.props.book} RefreshApp={this.props.RefreshApp} updateShelf={this.props.updateShelf}/>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
    )
  }
}

export default Book
