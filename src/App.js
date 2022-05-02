import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BookDisplay from './BookDisplay'

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
    this.setState(prevState => ({ bookList: [...prevState.bookList, newBook]}))
    this.SaveBook(newBook, shelf)
  }

  onShelfChange = (updateBook, shelf) => { 
    const newBookList = [...this.state.bookList];
    const updatedBook = this.state.bookList.filter(book => book.id === updateBook.id)[0]
    updatedBook.shelf = shelf;
    newBookList[updatedBook.id] = updatedBook
    this.setState({ bookList: newBookList })
    this.SaveBook(updatedBook, shelf)
  }

  SaveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((bookList) => {
        // this.setState(() => ({
        //   bookList
      })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (<Search bookList={this.state.bookList} onCloseSearch={this.onCloseSearch} addBookToLibrary={this.addBookToLibrary}/>) 
        : (<BookDisplay bookList={this.state.bookList} onShelfChange={this.onShelfChange}/>)}
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })} >Add a book</button>
        </div>
      </div>
    )
  }
}

export default BooksApp
