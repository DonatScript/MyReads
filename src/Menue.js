import React, { Component } from 'react'

class Menu extends Component {
  state = {
    shelf: this.props.book.shelf
  }
  changeStatus(value) {
    this.setState(
      {shelf: value}
    )
    this.props.updateShelf(this.props.book,value)
  }
  render() {
    return (
        <select value={this.props.book.shelf} onChange={(event) => {this.changeStatus(event.target.value)}} >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option  selected value="none">None</option>
        </select>
    )
  }
}

export default Menu
