import React, { Component } from 'react';
import axios from 'axios'
import './Resto.css'

class Review extends Component {
  constructor () {
    super ();
    this.state = {
      message: 'Foods in Jakarta',
      data: []
    }
  }
  getData () {
    let restoid = +this.props.location.search.slice(1)
    console.log('id==', typeof restoid)
    axios({
      method: 'get',
      url: `https://developers.zomato.com/api/v2.1/reviews?res_id=${restoid}`,
      headers: {
        'user-key': '0bd221047f44b2055e1e1e69efa43a14'
      }

    }).then(response => {
      console.log('response review==', response.data.user_reviews)
      this.setState({
        data : response.data.user_reviews
      })
    }).catch(error => {
      console.log(error)
    })
  }

  componentDidMount () {
    this.getData()
  }

  render() {
    return (
      <div>
        <h2>Resto Review</h2>
        {console.log('state data==',this.state.data)}
        <div className="restodiv">
          {this.state.data.map(value => {
            return (
              <div key={value.review.id} className="review-list">
                <h4>Rating: {value.review.rating}</h4>
                <hr/>
                <p>{value.review.review_text}</p>
                <small>
                {/* <p>-{value.review.user.name}</p> */}
                </small>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Review;