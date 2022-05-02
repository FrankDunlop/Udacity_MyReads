import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {

    onShelfChange = shelf => {
        this.props.onShelfChange(this.props.book, shelf);
    }

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.book.imageLinks && `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
                        {/* <BookShelfChanger hideNoneCategory={this.props.hideNoneCategory} onShelfChange={this.onShelfChange}/> */}
                        <BookShelfChanger shelf={this.props.book.shelf ? this.props.book.shelf : 'none'} onShelfChange={this.onShelfChange}/>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    {/* <div className="book-authors">{this.props.book.authors.join(", ")}</div> */}
                    <div className="book-authors">{this.props.book.authors}</div>
                </div>
            </li>
        )
    }
}


export default Book