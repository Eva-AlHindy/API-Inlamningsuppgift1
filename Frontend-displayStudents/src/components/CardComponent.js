/*
CardComponent is a class component which we use to show or hide the card.
It has one state (showInfo) in the constructor, and one method (toggleInfo)
which we use to change the state(showInfo) from true to false when we click the button
 (Show info) and this will in its turn to show or hide the info.
*/

import React, { Component } from 'react';
import {Button,Card} from 'react-bootstrap';
import PropTypes from 'prop-types';
class CardComponent extends Component {

  static propTypes = {
    info: PropTypes.string,// throws a warning if info is not string
  }

  constructor(props){
    super(props);
    /* We put (showInfo) as a  beginning state in the constructor.*/
    this.state = {
      showInfo: false,
    }
  }
  /* toggleInfo is a method to change the state (showInfo) from true till false or vice versa
    by using setState.
  */
   toggleInfo = (e) => {
       this.setState({
         showInfo: !this.state.showInfo
       })
     }

    /* we render the card which has two divs and a button.
    This button will appear if there is info (props).
    when we click the button, we call the method (togglInfo)
    and this will show or hide the div which has (this.props.info).
    */
  render(){
    return (
      <Card className="card">
        <div>
          {this.props.children}
        </div>
        <div id="showHide">
          {this.state.showInfo?this.props.info:null}
        </div>
        {this.props.info &&
          <Button className="cardBtn" variant="primary" onClick={this.toggleInfo}>Show info</Button>
        }
      </Card>
    );
}
}

export default CardComponent;
