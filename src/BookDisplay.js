import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class BookDisplay extends Component {

    onShelfChange = (book, shelf) => {
        this.props.onShelfChange(book, shelf)
    }

    render() {
        const { bookList } = this.props;

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf title='Currently Reading' books={bookList.filter(book => book.shelf === 'currentlyReading')} onShelfChange={this.onShelfChange}/>  
                    <BookShelf title='Want To Read' books={bookList.filter(book => book.shelf === 'wantToRead')} onShelfChange={this.onShelfChange}/>
                    <BookShelf title='Read' books={bookList.filter(book => book.shelf === 'read')} onShelfChange={this.onShelfChange}/>
                </div>
            </div>
        )
    }
}

BookDisplay.propTypes = {
    bookList: PropTypes.array.isRequired
}

export default BookDisplay