import React, { Component } from 'react';
import SearchResults from './SearchResults';
import * as BooksAPI from '../API/BooksAPI'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class Search extends Component {

    state = {
        searchResults: []
    }

    onShelfChange = (book, shelf) => {
        this.props.onShelfChange(book, shelf)
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
                        this.setState(() => ({searchResults}))
                    }
                }
            )
        }
    }

    render() {
        const { bookList } = this.props;

        return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/"><button className="close-search" type="button">Close</button></Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={(e) => this.search(e.target.value)}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    <SearchResults bookList={bookList} searchResults={this.state.searchResults} onShelfChange={this.onShelfChange}/>
                </ol>
            </div>
        </div>
        )
    }
}

SearchResults.propTypes = {
    bookList: PropTypes.array.isRequired,
}

export default Search