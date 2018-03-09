import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchPage extends Component {
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
          const match = new RegExp(escapeRegExp(query), 'i')
          filterBooks = books.filter((book)=> match.test(book.title))
        }else{
          filterBooks = books
        }

        filterBooks.sort(sortBy('title'))

    return(

    < div className = "" >
    {console.log("SearchPage books: ", books)}
      <div className="search-input-div">
        <h1>Search For a Book</h1>
        <input className="search-input" placeholder=" Search for a book"></input>
        <span>Now showing: {books.length}</span>
      </div>
      <ul className='book-list'>
        {books.map((book) => (
          <li key={book.title} className='book-list-item'>

            <div className='book-details'>
              <p>{book.title}</p>
              <p>{book.authors}</p>
              <img className='book-cover' src = {book.imageLinks.thumbnail} alt = {`Cover image for: ${book.title}`}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
  }
}




export default SearchPage
