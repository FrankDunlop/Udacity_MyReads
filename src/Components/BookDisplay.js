import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

function BookDisplay(props){

    const onShelfChange = (book, shelf) => {
        props.onShelfChange(book, shelf)
    }

    const { bookList } = props

    return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf title='Currently Reading' books={bookList.filter(book => book.shelf === 'currentlyReading')} onShelfChange={onShelfChange}/>  
                <BookShelf title='Want To Read' books={bookList.filter(book => book.shelf === 'wantToRead')} onShelfChange={onShelfChange}/>
                <BookShelf title='Read' books={bookList.filter(book => book.shelf === 'read')} onShelfChange={onShelfChange}/>
            </div>
            <div className="open-search">
                <Link to="/Search"><button type="button">Add a book</button></Link>
            </div>
        </div>
    )
    
}

BookDisplay.propTypes = {
    bookList: PropTypes.array.isRequired
}

export default BookDisplay