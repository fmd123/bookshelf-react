import React from 'react'

class SearchPage extends React.Component {
  state = {
    // need piece of state to show results of Search
  }
  render() {
    return(
    < div className = "" >
    <div className="search-input-div">
      <h1>Search For a Book</h1>
      <input className="search-input" placeholder=" Search for a book"></input>
    </div>
      <div className = "search-results-div">
        <ul className = "search-result-list">
          <li>put books here</li>
          <li>put books here by mapping over books list</li>
          <li>each book needs a button to allow you to add to a shelf</li>
        </ul>
      </div>
    </div>
  )
  }
}

export default SearchPage
