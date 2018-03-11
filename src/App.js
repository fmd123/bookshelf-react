import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'
import SearchPage from './SearchPage'
import Bookshelf from './Bookshelf.js'

class BiblioApp extends Component {
  state = {
    books: [],
    // TODO: some sort of state later see notes in starter
    showSearchPage: true

  }
  // I need a bunch of setState functions and event handlers
  componentDidMount (){
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
    })
  }

  changeShelf (){
    //how should I make this?
    //need wishRead haveRead CurrentRead and None states.
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Reading App
          </h1>
          {/* <Link href = "./Searchpage">Search</Link> */}
          {/* I need a link not an input here. look it up */}

        </header>
        {console.log(this.state.books)}

        {this.state.showSearchPage ? (<SearchPage books = {this.state.books}/>
        ):(
          <Bookshelf />
          )}
      </div>
    )
}
}

export default BiblioApp;
