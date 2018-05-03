import React, { Component } from 'react';
import axios from 'axios'
import './Resto.css'
import {Link, Route} from 'react-router-dom'
import Menu from './Menu'
import Review from './Review'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getRestoData} from '../store/Resto/action.resto'

class DetailPage extends Component {
  constructor () {
    super ()
    this.state = {
      name: '',
      location: '',
      cuisines: '',
      avgCost: '',
      image: '',
      rating: ''
    }
  }
  
  getRestoDetail () {
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
  readRestoList () {
    const idResto = this.props.match.params.id
    const dataRestoNew = this.props.listResto
    dataRestoNew.map(detail => {
      if(detail.restaurant.id === idResto){
        this.setState({
          name: detail.restaurant.name,
          location: detail.restaurant.location.address,
          cuisines: detail.restaurant.cuisines,
          avgCost: detail.restaurant.average_cost_for_two,
          image: detail.restaurant.thumb,
          rating: detail.restaurant.user_rating.rating_text
        })
      }
    })
  }

  componentDidMount () {
    this.getRestoDetail()
    this.readRestoList()
  }

  render() {
    return (
      <div>
        <h1>Detail Restaurant!!!</h1>
        <h2>resto id: {this.props.match.params.id}</h2>
        <div className="restodiv">
          <div className="container">
            <img src={this.state.image} alt=""/>
          </div>
          <div className="container">
            <p>Restaurant Name: {this.state.name}</p>
            <p>Location: {this.state.location}</p>
            <p>Cuisines: {this.state.cuisines}</p>
            <p>Average cost for two: {this.state.avgCost}</p>
            <p>Rating: {this.state.rating}</p>
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
  }
}

const mapStateToProps = (state) => ({
  listResto : state.dataResto
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getRestoData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (DetailPage);