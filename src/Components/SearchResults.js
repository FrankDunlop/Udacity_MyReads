import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

function SearchResults (props){

    const onShelfChange = (book, shelf) => {
        props.onShelfChange(book, shelf);
    }

    const checkBookInLibrary = (bookId) => {
        var shelf = 'none'
        props.bookList.forEach(book => {
            if(book.id === bookId) {
                shelf = book.shelf
            }
        })
        return( shelf )
    }

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {
                    props.searchResults && props.searchResults.map(book => 
                        <Book key={book.id} book={book} shelf={checkBookInLibrary(book.id)} onShelfChange={onShelfChange} />)
                }
                </ol>
            </div>
        </div>
    )
}

SearchResults.propTypes = {
    bookList: PropTypes.array.isRequired,
    searchResults: PropTypes.array.isRequired
}

export default SearchResults;
