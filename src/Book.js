
import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger'

const Book = props => {
    return (
    <li>
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: props.book.cover }}></div>
                < BookShelfChanger />
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors}</div>
        </div>
    </li>
    );
  };

  Book.propTypes = {
    book: PropTypes.object.isRequired,
  }; 

export default Book