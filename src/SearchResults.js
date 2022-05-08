import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class SearchResults extends Component {

    onShelfChange = (book, shelf) => {
        this.props.onShelfChange(book, shelf);
    }

    checkBookInLibrary = (bookId) => {
        var shelf = 'none'
        this.props.bookList.forEach(book => {
            if(book.id === bookId) {
                shelf = book.shelf
            }
        })
        return( shelf )
    }


    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        this.props.searchResults && this.props.searchResults.map(book => 
                            <Book key={book.id} book={book} shelf={this.checkBookInLibrary(book.id)} onShelfChange={this.onShelfChange} />
                        )
                    }
                    </ol>
                </div>
            </div>
        )
    }
}

SearchResults.propTypes = {
    bookList: PropTypes.array.isRequired,
    searchResults: PropTypes.array.isRequired
}

export default SearchResults;
