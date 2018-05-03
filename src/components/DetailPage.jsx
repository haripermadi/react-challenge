import React, { Component } from 'react';
import axios from 'axios'
import './Resto.css'
import {Link, Route} from 'react-router-dom'
import Menu from './Menu'
import Review from './Review'

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
    const idResto = this.props.match.params.id
    axios({
      method: 'get',
      url: 'https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&q=food',
      headers: {
        'user-key': '0bd221047f44b2055e1e1e69efa43a14'
      }

    }).then(response => {
      console.log('response api==', response.data.restaurants)
      response.data.restaurants.map(detail => {
        if(detail.restaurant.id === idResto) {
          console.log(detail.restaurant)
          this.setState({
            name: detail.restaurant.name,
            location: detail.restaurant.location.address,
            cuisines: detail.restaurant.cuisines,
            avgCost: detail.restaurant.average_cost_for_two,
            image: detail.restaurant.thumb,
            rating: detail.restaurant.user_rating.rating_text
          })
        } else {
          console.log('not found!')
        }
      })
    }).catch(error => {
      console.log(error)
    })
  }
  componentDidMount () {
    this.getRestoDetail()
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
          {console.log('bname===', this.state.name)}
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
              {/* <Link to ={`${this.props.match.url}`}>Menu</Link> */}
              <Link to={{
                pathname:`${this.props.match.url}`,
                search: `${this.props.match.params.id}`
              }}>Review</Link>
            </li>
            <li>
              <Link to ={`${this.props.match.url}/menu`}>Menu</Link>
            </li>
          </ul>
        </div>
        <Route exact path={`${this.props.match.url}`} component={Review} />
        <Route path={`${this.props.match.url}/menu`} component={Menu} />
      </div>
    );
  }
}

export default DetailPage;