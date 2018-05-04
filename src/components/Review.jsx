import React, { Component } from 'react';
import axios from 'axios'
import './Resto.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getReview} from '../store/Resto/action.resto'

class Review extends Component {
  
  componentDidMount () {
    let restoid = +this.props.location.search.slice(1)
    this.props.getReview(restoid)
  }

  render() {
    if(this.props.listReview.loading) {
      return (
        <h1>loading data...</h1>
      )
    } else {
      if(!this.props.listReview.error) {
        return (
          <div>
            <h2>Resto Review</h2>
            <div className="restodiv">
              {this.props.listReview.data.map(value => {
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
      } else {
        return (
          <h1>something wrong!!</h1>
        )
      }
    }
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getReview
}, dispatch)

const mapStateToProps = (state) => ({
  listReview : state.dataReview
})

export default connect(mapStateToProps, mapDispatchToProps) (Review);