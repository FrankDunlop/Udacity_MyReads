import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {

    onShelfChange = (book, shelf) => {
        this.props.onShelfChange(book, shelf);
    }

    render() {
        const { books } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        { books.map(book => (
                            <Book key={book.id} book={book} onShelfChange={this.onShelfChange} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired
}

export default BookShelf;
