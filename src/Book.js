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
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
                        <BookShelfChanger onShelfChange={this.onShelfChange}/>
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