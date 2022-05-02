import React from 'react'
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BookDisplay from './BookDisplay'
import BookList from './BookList'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    bookList: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((bookList) => {
      this.setState(() => ({
        bookList
      }))
    })
  }

  onCloseSearch = () => {
    this.setState({ showSearchPage: false })
  }

  addBookToLibrary = (newBook, shelf) => { 
    newBook.shelf = shelf
    this.setState(prevState => ({ bookList: [...prevState.bookList, newBook] }))
    console.log(this.state.bookList)
    this.SaveBook(newBook, shelf)
  }

  onShelfChange = (updateBook, shelf) => { 
    const newBookList = [...this.state.bookList];
    const updatedBook = this.state.bookList.filter(book => book.id === updateBook.id)
    updatedBook[0].shelf = shelf;
    newBookList[updatedBook.id] = updatedBook
    this.setState({ bookList: newBookList })

    this.SaveBook(updatedBook[0], shelf)
  }

  SaveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((bookList) => {
        // this.setState(() => ({
        //   bookList
        console.log(bookList)
      })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (<Search onCloseSearch={this.onCloseSearch} addBookToLibrary={this.addBookToLibrary}/>) 
        : 
        (<BookDisplay bookList={this.state.bookList} onShelfChange={this.onShelfChange}/>)}
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })} >Add a book</button>
        </div>
      </div>
    )
  }
}

BookList.propTypes = {
  booklist: PropTypes.array.isRequired,
  searchResults: PropTypes.array.isRequired
};

export default BooksApp
