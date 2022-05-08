# MyReads Personal Book Tracker

This is the Udacity React Nanodegree book tracking app project.
This app allows you to mange your own personal book library, assigning a book to a specific shelf in your library.

**Personal Library:**

This is the main screen that displays all books in your personal library. There are three shelves, Currently Reading, Want to Read and Read. 
A book can be moved between shelves by using the shelf changer icon displayed on the bottom right of the book. 
Choosing 'none' from the shelf changer options will remove the book from your library.

![image](https://user-images.githubusercontent.com/1563903/167295232-635635fd-64d0-44b2-85ef-89ab4ba96ddc.png)


**Searching for books:**

Selcting the search icon (bottom right of the main screen) will allow you to do an API search which returns books based on the input search query. 
The search results will be displayed with the shelf changer option which allows you to add the book to a shelf in your personal library.


![image](https://user-images.githubusercontent.com/1563903/167295293-3aeb2406-2ded-4fb7-90ed-abe595fd9b30.png)



# Design and Architecture

There app has two screens:

    Your personal library, the main screen which displays the books in your library on their respective shelf

    The search screen which allows you to search for and add a book to your library

The project consists of the following components:

    BookDisplay: The main screen which displays books in you personal library

    BookShelf: Each shelf is its own respective bookshelf component

    Book: the actual book component

    BookShelfChanger: the component that defines the bookshelf changing impementation

    Search: the search screen responsible for searching for books based on an input query

    SearchResults: the list of books returned by the search

# Runing the project
1. Clone the repo from GitHub: $ git clone https://github.com/FrankDunlop/Udacity_MyReads.git
2. Install project dependencies by running: npm install
3. Start the server by running: npm start

