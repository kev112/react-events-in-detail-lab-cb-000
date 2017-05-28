import React from 'react';

export default class CoordinatesButton  extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let coordinates = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coordinates) ;
  }

   render() {
    return <button onClick={this.handleClick}>'Get coordinates'</button>;
   }
 }