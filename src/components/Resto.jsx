import React, { Component } from 'react';
import axios from 'axios'
import './Resto.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getResto} from '../store/Resto/action.resto'

class Resto extends Component {
  componentDidMount () {
    this.props.getResto()
  }

  render() {
    if(this.props.listResto.loading) {
      return (
        <h1>Loading data...</h1>
      )
    } else {
      if (!this.props.listResto.error) {
        return (
          <div>
            <h1>Foods in Jakarta</h1>
            <div className="restodiv">
              { this.props.listResto.data.map(resto => {
                return (
                  <div  key={resto.restaurant.id} className="resto-list">
                  {/* <h3>{resto.restaurant.id}</h3> */}
                    <img src={resto.restaurant.thumb} alt=""/>
                    <h3>{resto.restaurant.name}</h3> 
                    { localStorage.getItem('token')?
                      <Link to ={`/detail/${resto.restaurant.id}`}>
                      Detail
                      </Link>:<Link to={'/login'}>Login to see detail!</Link> }
                  </div>
                )
              }) }
            </div>
          </div>
        );
      } else {
        return <h1>Somthing wrong!!!</h1>
      }
    }
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getResto
}, dispatch)

const mapStateToProps = (state) => ({
  listResto : state.dataResto
})

export default connect(mapStateToProps, mapDispatchToProps) (Resto);