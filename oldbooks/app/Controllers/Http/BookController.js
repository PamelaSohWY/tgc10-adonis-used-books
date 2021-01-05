'use strict'

const Book = use('App/Models/Book')

class BookController {
  async index({view}) {
    // select all the rows from the books table
    let allBooks = await Book.all();
    return view.render('books/index', {
      "books": allBooks.toJSON() // must convert to JSON
    })
  }

  async show({view, params}) {
    // extract out the book_id parameter from the URL
    let bookId = params.book_id;
    // select * from books where id = bookId
    let book = await Book.find(bookId);
    return view.render("books/show", {
      "book": book
    })
  }
}

//this was the first exercise
// const booksDB = [
//   {
//     'id': 1,
//     'title': 'Lord of the Rings',
//     'condition': 3
//   },
//   {
//     'id': 2,
//     'title': 'A Wizard in Rhyme',
//     'condition': 2
//   },
//   {
//     'id': 3,
//     'title': 'Waylander',
//     'condition': 2.5
//   }

// ]

// class BookController {
//   index({view}) {
//     return view.render('books/index', {
//       "books": booksDB
//     })
//   }

//   show({view, params}) {
//     // extract out the book_id parameter from the URL
//     let bookId = params.book_id;
//     let book = booksDB.find( b => b.id === parseInt(bookId));
//     return view.render("books/show", {
//       "book": book
//     })
//   }
// }

module.exports = BookController
