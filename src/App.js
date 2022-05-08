import React, { Component } from 'react'
import {Route, Routes} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BookDisplay from './BookDisplay'


class BooksApp extends Component {
  state = {
      bookList: []
  }

  componentDidMount() {
      BooksAPI.getAll()
        .then((bookList) => {
          this.setState(() => ({
            bookList
        }))
      })
  }

  onShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        BooksAPI.getAll().then((bookList) => {
            this.setState({ bookList })
        })
    })
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<BookDisplay bookList={this.state.bookList} onShelfChange={this.onShelfChange}/>}/>
          <Route path="/Search" element={<Search bookList={this.state.bookList} onCloseSearch={this.onCloseSearch} onShelfChange={this.onShelfChange}/>}/>
        </Routes>
      </div>
    )
  }
}

export default BooksApp
