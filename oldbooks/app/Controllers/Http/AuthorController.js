'use strict'

const authorsDB = [
   {
      "id":1,
	  "name":"JRR Tolkien"
   },
   {
	  "id":2,
	  "name":"CS Lewis"
   },
   {
	  "id":3,
	  "name":"Goh Sin Tub"
   },
   {
	  "id":4,
	  "name":"Catherine Lee"
   }

]

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

class AuthorController {
  list({view}){
    return view.render('authors/list',{
      "authors":authorsDB
    })
  }

  display({view, params}){
    //extract authors from author_id parameter from URL
    let authorId= params.author_id;
    let author = authorsDB.find( a => a.id === parseInt(authorsId));
    return view.render("authors/display", {
      "author": author
    })
  }

}

module.exports = AuthorController
