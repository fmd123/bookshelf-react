import React from 'react'

class CurrentRead extends React.Component {
  state = {}
  render() {
    return(
    < div className = "current-read-div" >
      <div className = "list-books-title">
        <h2>Books I Am Currently Reading</h2>
      </div>
      <div className = "current-book-list">
        <p>put current books here</p>
      </div>
    </div>
  )
  }
}

export default CurrentRead
