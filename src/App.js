import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'
import CurrentRead from './CurrentRead'
import HaveRead from './HaveRead'
import WishRead from './WishRead'
import SearchPage from './SearchPage'



class BiblioApp extends Component {
  state = {
    // TODO: some sort of state later see notes in starter
    showSearchPage:false
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Bookshelf
          </h1>
          <div className = "search-input-div">
            <input className = "search-input" placeholder = " Search for a book"></input>
          </div>
        </header>

        <CurrentRead />
        <HaveRead />
        <WishRead />
        <SearchPage />

      </div>
    );
  }
}

export default BiblioApp;
