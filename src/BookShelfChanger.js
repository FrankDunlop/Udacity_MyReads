import React, { Component } from 'react';

class BookShelfChanger extends Component {

    onShelfChange = shelf => {
        //console.log('BookShelfChanger ' + shelf)
        this.props.onShelfChange(shelf)
    };

    render() {
        return (
            
            <div className="book-shelf-changer">
                <select defaultValue={'move'} onChange={(e) => this.onShelfChange(e.target.value)}>
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

 export default BookShelfChanger