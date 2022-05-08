import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookShelf(props){

    const { books } = props;

    const onShelfChange = (book, shelf) => {
        props.onShelfChange(book, shelf);
    }

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    { books.map(book => (
                        <Book key={book.id} shelf={book.shelf} book={book} onShelfChange={onShelfChange} />
                    ))}
                </ol>
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired
}

export default BookShelf;
