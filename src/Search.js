import React, { Component } from 'react';
import SearchResults from './SearchResults';
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
        this.setState(() => ({
            searchResults: []
        }))

        if(query !== '')
        {
            BooksAPI.search(query)
            .then((searchResults) => {
                if(!searchResults.error)
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
                <SearchResults books={this.state.searchResults} addBookToLibrary={this.addBookToLibrary}/>
              </ol>
            </div>
          </div>
        )
    }
}

export default Search