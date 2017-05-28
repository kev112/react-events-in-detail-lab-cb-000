import React from 'react';

export default class DelayedButton   extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.persist();

    // setTimeout(function () {
    //     this.props.onDelayedClick(event) },
    //     this.props.delay
    // );
    setTimeout( () =>
      {
        this.props.onDelayedClick(event) },
        this.props.delay
    );
  }

   render() {
    return (
      <button onClick={this.handleClick}>'Get coordinates'</button>
    );
   }
 }