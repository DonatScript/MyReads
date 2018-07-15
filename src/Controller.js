import React, { Component } from 'react'

class Controller extends Component {

  render() {
    return (
        <select value={this.props.book.shelf}
        // <select value={() =>{
        //     if(this.props.book.shelf !== undefined){return this.props.book.shelf
        //     }else{return 'none'}}}
            onChange={(event) => {this.props.updateShelf(this.props.book,event.target.value)}} >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option selected value="none">None</option>
        </select>
    )
  }
}

export default Controller
