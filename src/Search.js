import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList';
import * as BooksAPI from './BooksAPI'

class Search extends Component {

    state = {
        searchResults: []
    }

    closeSearch = () => {
        this.props.onCloseSearch()
    }

    onShelfChange = (id, shelf) => {
        this.props.onShelfChange(id, shelf)
    }

    addBookToLibrary = (book, shelf) => {
        this.props.addBookToLibrary(book, shelf)
    }

    search = (query) => {
        if(query !== '')
        {
            BooksAPI.search(query)
            .then((searchResults) => {
                if(searchResults.error)
                {
                    this.setState(() => ({
                        searchResults: []
                    }))
                }
                else
                {
                    this.setState(() => ({
                        searchResults
                    }))
                }
            })
        }
      }

    render() {

        return(
        <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.closeSearch()}>Close</button>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={(e) => this.search(e.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                <BookList books={this.state.searchResults} addBookToLibrary={this.addBookToLibrary}/>
              </ol>
            </div>
          </div>
        )
    }
}

Search.propTypes = {
  books: PropTypes.array.isRequired,
}

export default Search;