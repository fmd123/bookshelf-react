import React from 'react'

class SearchPage extends React.Component {
  state = {}
  render() {
    return(
    < div className = "" >
      <div className = "">
        <h1>Search For a Book</h1>
      </div>
      <div className = "">
        <ul>
          <li>put books here</li>
          <li>put books here by mapping over books list</li>
        </ul>
      </div>
    </div>
  )
  }
}

export default SearchPage
