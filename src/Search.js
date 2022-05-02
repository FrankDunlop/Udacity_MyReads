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

    searchLibrary = (query) => {
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
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={(e) => this.searchLibrary(e.target.value)}/>
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