import React, { Component } from 'react';
import axios from 'axios'
import './Resto.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getRestoData} from '../store/Resto/action.resto'

class Resto extends Component {
  getData () {
    axios({
      method: 'get',
      url: 'https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&q=food',
      headers: {
        'user-key': '0bd221047f44b2055e1e1e69efa43a14'
      }

    }).then(response => {
      this.props.getRestoData(response.data.restaurants)
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
        <h1>Foods in Jakarta</h1>
        <div className="restodiv">
          { this.props.listResto.map(resto => {
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getRestoData
}, dispatch)

const mapStateToProps = (state) => ({
  listResto : state.dataResto
})

export default connect(mapStateToProps, mapDispatchToProps) (Resto);