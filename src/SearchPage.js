import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchPage extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    onDeleteBook: PropTypes.func.isRequired
  }
  state = {
    query: ''
    // need piece of state to show results of Search
  }

  updateQuery = (query)=>{
  this.setState({query: query.trim() })
}

clearQuery = ()=> {
  this.setState({query: ''})
}



  render() {
    const { books, onDeleteBook} = this.props
    const { query } = this.state
    let filterBooks
        if(query){
          // const match = new RegExp(escapeRegExp(query), 'i')
          // filterBooks = books.filter((book)=> match.test(book.title) || match.test(book.authors))
          filterBooks = books.filter((book)=>{
            return book.title.includes(query)|| book.authors.includes(query)
          })
          //how do I use the search terms file to do this?
        }else{
          filterBooks = books
        }

        filterBooks.sort(sortBy('title'))

    return(

    < div className = "list-books" >
    {console.log("SearchPage books: ", books)}
      <div className="search-input-div">
        <h1>Search For a Book</h1>
        <input
          className="search-books"
          placeholder=" Search for a book by title or author"
          value = {query}
          onChange = {(event)=>this.updateQuery(event.target.value)}
        />

        <span>  Now showing: {books.length}</span>
      </div>
      <ul className='book-list'>
        {filterBooks.map((book) => (
          <li key={book.title} className='book-list-item'>

            <div className='book-details'>
              <p>{book.title}</p>
              <p>
              {book.authors.map((author)=>(
                ` ${author} `
              ))}
            </p>

              <img className='book-cover' src = {book.imageLinks.thumbnail} alt = {`Cover image for: ${book.title}`}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
  }
}


// http://www.jessespevack.com/blog/2017/1/11/ee5yc9qy8k1i2e5n2v8f0woesvwj1y

export default SearchPage
