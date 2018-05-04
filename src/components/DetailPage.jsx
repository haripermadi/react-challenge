import React, { Component } from 'react';
import axios from 'axios'
import './Resto.css'
import {Link, Route} from 'react-router-dom'
import Menu from './Menu'
import Review from './Review'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getDetail} from '../store/Resto/action.resto'

class DetailPage extends Component {

  componentDidMount () {
    const idResto = this.props.match.params.id
    this.props.getDetail(idResto)
    // this.readRestoList()
    console.log(this.props.detailRes)
  }

  render() {
    if(this.props.detailRes.loading) {
      return (
        <h1>Loading data...</h1>
      )
    } else {
      if(!this.props.detailRes.error) {
        return (
          <div>
            <h1>Detail Restaurant!!!</h1>
            <h2>resto id: {this.props.match.params.id}</h2>
            <div className="restodiv">
              <div className="container">
                <img src={this.props.detailRes.data.image} alt=""/>
              </div>
              <div className="container">
                <p>Restaurant Name: {this.props.detailRes.data.name}</p>
                <p>Location: {this.props.detailRes.data.location}</p>
                <p>Cuisines: {this.props.detailRes.data.cuisines}</p>
                <p>Average cost for two (IDR): {this.props.detailRes.data.avgCost}</p>
                <p>Rating: {this.props.detailRes.data.rating}</p>
              </div>
            </div>
            <hr/>
            <div>
              <ul>
                <li>
                  <Link to ={`${this.props.match.url}`}>Menu</Link>
                </li>
                <li>
                  <Link to={{
                    pathname:`${this.props.match.url}/review`,
                    search: `${this.props.match.params.id}`
                  }}>Review</Link>
                </li>
              </ul>
            </div>
            <Route exact path={`${this.props.match.url}`} component={Menu} />
            <Route path={`${this.props.match.url}/review`} component={Review} />
          </div>
        );
      } else {
        return (
          <h1>Something wrong!!</h1>
        )
      }
    }
  }
}

const mapStateToProps = (state) => ({
  detailRes : state.detailResto
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDetail
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (DetailPage);