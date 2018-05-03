import React, { Component } from 'react';
import axios from 'axios'
import './Resto.css'
import {Link} from 'react-router-dom'
import store from '../store'

class Resto extends Component {
  constructor () {
    super ();
    this.state = {
      message: 'Foods in Jakarta',
      data: store.getState().dataResto
    }
    store.subscribe(() => {
      const newData = store.getState().dataResto
      this.setState({
        data:newData
      })
    })
  }
  getData () {
    axios({
      method: 'get',
      url: 'https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&q=food',
      headers: {
        'user-key': '0bd221047f44b2055e1e1e69efa43a14'
      }

    }).then(response => {
      // console.log('response api==', response.data.restaurants)
      console.log('before==', this.state.data)
      store.dispatch({
        type: 'GET_RESTO_DATA',
        payload: response.data.restaurants
      })
      console.log('after==', this.state.data)
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
    let restoss = store.getState()
    return (
      <div>
        <h1>{ this.state.message }</h1>
        <div className="restodiv">
        {console.log('data state==', restoss)}
          { this.state.data.map(resto => {
            return (
              <div  key={resto.restaurant.id} className="resto-list">
                <img src={resto.restaurant.thumb} alt=""/>
                <h3>{resto.restaurant.name}</h3> 
                { localStorage.getItem('token')?
                  <Link to ={`/detail/${resto.restaurant.id}`} onClick={this.checkStatus}>
                  Detail
                  </Link>:<Link to={'/login'}>Login to see detail!</Link> }
              </div>
            )
          }) }
        </div>
      </div>
    );
  }
}

export default Resto;