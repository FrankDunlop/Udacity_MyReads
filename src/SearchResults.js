import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class SearchResults extends Component {

    addBookToLibrary = (book, shelf) => {
        this.props.addBookToLibrary(book, shelf);
    }


    render() {
        const { searchResults } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        { searchResults.map(book => (
                            <Book key={book.id} book={book} onShelfChange={this.addBookToLibrary} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

SearchResults.propTypes = {
  books: PropTypes.array.isRequired
}

export default SearchResults;
