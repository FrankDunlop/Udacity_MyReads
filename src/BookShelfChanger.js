import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends Component {

    onShelfChange = shelf => {
        this.props.onShelfChange(shelf)
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.props.shelf} onChange={(e) => this.onShelfChange(e.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading </option>
                    <option value="wantToRead">Want to Read </option>
                    <option value="read">Read </option>
                    <option value="none">None </option>
                </select>
            </div>
        )
    }
}

BookShelfChanger.propTypes = {
    shelf: PropTypes.string.isRequired
  }

 export default BookShelfChanger