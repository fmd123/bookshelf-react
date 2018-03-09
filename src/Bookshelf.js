import React, {Component} from 'react'
import CurrentRead from './CurrentRead'
import HaveRead from './HaveRead'
import WishRead from './WishRead'
import './Bookshelf.css'


class Bookshelf extends Component {
  state = {
    //do I need state for this one?
    //each individual shelf has its own state
    //
  }

  render (){
    return(
      <div>
        <hr className="style13"/>
        <CurrentRead />
        <hr className="style13"/>
        <HaveRead />
        <hr className="style13"/>
        <WishRead />
    </div>
    )
  }
}


export default Bookshelf;
