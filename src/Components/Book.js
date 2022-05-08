import React from 'react';
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types';

function Book (props){

    const onShelfChange = shelf => {
        props.onShelfChange(props.book, shelf);
    }

    const { book, shelf } = props;

    return (
        
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks && `url("${book.imageLinks.thumbnail}")` }}></div>
                    <BookShelfChanger shelf={shelf} onShelfChange={onShelfChange}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
            </div>
        </li>
    )
}

Book.propTypes = {
    shelf: PropTypes.string.isRequired
}

export default Book