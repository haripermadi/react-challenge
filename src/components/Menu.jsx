import React, { Component } from 'react';

class Menu extends Component {

  render() {
    return (
      <div>
        <img src="https://t4.ftcdn.net/jpg/01/32/37/87/500_F_132378745_rg8nXkmx2vt2ztif0kbwWUDY3EfQwgVe.jpg" alt=""/>
        <h2>Not Available yet!</h2>
        {console.log('props==',this.props.location.search.slice(1))}
      </div>
    );
  }
}

export default Menu;