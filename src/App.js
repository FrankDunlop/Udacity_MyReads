import React, { useState, useEffect } from 'react'
import {Route, Routes} from 'react-router-dom'
import * as BooksAPI from './API/BooksAPI'
import './css/App.css'
import Search from './Components/Search'
import BookDisplay from './Components/BookDisplay'


function BooksApp(){
  const [bookList, setBooklist] = useState([])

  useEffect(() => {
      BooksAPI.getAll()
        .then((bookList) => {
          setBooklist(bookList)
      })
  }, []);

  const onShelfChange = (book, shelf) => {
    book.shelf = shelf
    setBooklist(bookList.filter(b => b.id !== book.id).concat([ book ]))
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<BookDisplay bookList={bookList} onShelfChange={onShelfChange}/>}/>
        <Route path="/Search" element={<Search bookList={bookList} onShelfChange={onShelfChange}/>}/>
      </Routes>
    </div>
  )
}

export default BooksApp
