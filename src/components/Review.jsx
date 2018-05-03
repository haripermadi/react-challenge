import React, { Component } from 'react';
import axios from 'axios'
import './Resto.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getRestoReview} from '../store/Resto/action.resto'

class Review extends Component {
  getData () {
    let restoid = +this.props.location.search.slice(1)
    axios({
      method: 'get',
      url: `https://developers.zomato.com/api/v2.1/reviews?res_id=${restoid}`,
      headers: {
        'user-key': '0bd221047f44b2055e1e1e69efa43a14'
      }
    }).then(response => {
      this.props.getRestoReview(response.data.user_reviews)
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
        <div className="restodiv">
          {this.props.listReview.map(value => {
            return (
              <div key={value.review.id} className="review-list">
                <h4>Rating: {value.review.rating}</h4>
                <hr/>
                <p>{value.review.review_text}</p>
                <small>
                <p>-{value.review.user.name}</p>
                </small>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getRestoReview
}, dispatch)

const mapStateToProps = (state) => ({
  listReview : state.dataReview
})

export default connect(mapStateToProps, mapDispatchToProps) (Review);