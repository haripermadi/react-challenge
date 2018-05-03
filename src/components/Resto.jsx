import React, { Component } from 'react';
import axios from 'axios'
import './Resto.css'
import {Link} from 'react-router-dom'

class Resto extends Component {
  constructor () {
    super ();
    this.state = {
      message: 'Foods in Jakarta',
      data: []
    }
  }
  getData () {
    axios({
      method: 'get',
      url: 'https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&q=food',
      headers: {
        'user-key': '0bd221047f44b2055e1e1e69efa43a14'
      }

    }).then(response => {
      console.log('response api==', response.data.restaurants)
      this.setState({
        data : response.data.restaurants
      })
    }).catch(error => {
      console.log(error)
    })
  }
  componentDidMount () {
    this.getData()
  }
  checkStatus = () => {
    let token = localStorage.getItem('token')
    console.log('token===',token)
    if(token === null) {
      this.props.history.push('/login')
    }
  }
  render() {
    return (
      <div>
        <h1>{ this.state.message }</h1>
        <div className="restodiv">
          { this.state.data.map(resto => {
            return (
              <div  key={resto.restaurant.id} className="resto-list">
                <img src={resto.restaurant.thumb} alt=""/>
                <h3>{resto.restaurant.name}</h3> 
                  <Link to ={`/detail/${resto.restaurant.id}`} onClick={this.checkStatus}>
                  Detail
                  </Link>
              </div>
            )
          }) }
        </div>
      </div>
    );
  }
}

export default Resto;