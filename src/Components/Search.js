import React, { useState } from 'react';
import SearchResults from './SearchResults';
import * as BooksAPI from '../API/BooksAPI'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

function Search(props){

    const { bookList } = props;
    const [searchResults, setsearchResults] = useState([])

    const onShelfChange = (book, shelf) => {
        props.onShelfChange(book, shelf)
    }

    const search = (query) => {
        setsearchResults([])

        if(query !== '')
        {
            BooksAPI.search(query)
                .then((results) => {
                    if(!results.error)
                    {
                        setsearchResults(results)
                    }
                }
            )
        }
    }

    return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/"><button className="close-search" type="button">Close</button></Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={(e) => search(e.target.value)}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    <SearchResults bookList={bookList} searchResults={searchResults} onShelfChange={onShelfChange}/>
                </ol>
            </div>
        </div>
    )
}

SearchResults.propTypes = {
    bookList: PropTypes.array.isRequired,
}

export default Search