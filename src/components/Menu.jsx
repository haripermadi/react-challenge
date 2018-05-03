import React, { Component } from 'react';

class Menu extends Component {

  render() {
    return (
      <div>
        <h2>Not Available yet!</h2>
        {console.log('props==',this.props.location.search.slice(1))}
      </div>
    );
  }
}

export default Menu;