'use strict'

const Author = use('App/Models/Author')

class AuthorController {
  async index({view}) {
    // select all the rows from the books table
    let allAuthors = await Author.all();
    return view.render('authors/index', {
      "authors": allAuthors.toJSON() // must convert to JSON
    })
  }

  async show({view, params}) {
    // extract out the book_id parameter from the URL
    let authorId = params.author_id;
    // select * from books where id = bookId
    let author = await Author.find(authorId);
    return view.render("authors/show", {
      "author": author
    })
  }

//For the first question
// const authorsDB = [
//    {
//       "id":1,
// 	  "name":"JRR Tolkien"
//    },
//    {
// 	  "id":2,
// 	  "name":"CS Lewis"
//    },
//    {
// 	  "id":3,
// 	  "name":"Goh Sin Tub"
//    },
//    {
// 	  "id":4,
// 	  "name":"Catherine Lee"
//    }

// ]


// class AuthorController {
//   list({view}){
//     return view.render('authors/list',{
//       "authors":authorsDB
//     })
//   }

//   display({view, params}){
//     //extract authors from author_id parameter from URL
//     let authorId= params.author_id;
//     let author = authorsDB.find( a => a.id === parseInt(authorsId));
//     return view.render("authors/display", {
//       "author": author
//     })
//   }

// }

create({view}){
  return view.render('authors/create')
}

async processCreate({request, response}) {
    // step 1: extract the user's response from the form
    let body = request.post();
    // step 2: fill in a new instance of the author entity
    let newAuthor = new Author();
    newAuthor.first_name = body.first_name;
    newAuthor.last_name = body.last_name;
    newAuthor.dob = body.dob;
    // step 3: save
    await newAuthor.save();
    response.route('show_all_authors')
  }
}

module.exports = AuthorController
