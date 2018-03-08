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
        <hr class="style13"/>
        <CurrentRead />
        <hr class="style13"/>
        <HaveRead />
        <hr class="style13"/>
        <WishRead />
    </div>
    )
  }
}


export default Bookshelf;
