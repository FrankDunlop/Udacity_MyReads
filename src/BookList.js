import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookList extends Component {

    addBookToLibrary = (id, shelf) => {
        console.log('BookList ' + id + shelf)
        this.props.addBookToLibrary(id, shelf);
    };

  render() {
    const { books } = this.props;
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <Book key={book.id} book={book} onShelfChange={this.addBookToLibrary} />
          ))}
        </ol>
      </div>
    </div>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookList;
