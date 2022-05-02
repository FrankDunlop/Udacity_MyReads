import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class BookShelfChanger extends Component {

    onShelfChange = shelf => {
        this.props.onShelfChange(shelf)
    }

    render() {
        return (
            <div className="book-shelf-changer">
                {/* <select defaultValue={'move'} onChange={(e) => this.onShelfChange(e.target.value)}> */}
                <select value={this.props.shelf} onChange={(e) => this.onShelfChange(e.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading </option>
                    <option value="wantToRead">Want to Read </option>
                    <option value="read">Read </option>
                    {/* <option hidden={hideNoneCategory} value="none">None </option> */}
                    <option value="none">None </option>
                </select>
            </div>
        )
    }
}

// BookShelfChanger.propTypes = {
//     hideNoneCategory: PropTypes.bool.isRequired
//   }

 export default BookShelfChanger