import {GET_RESTO_DATA_SUCCESS,
  GET_RESTO_DATA_PENDING,
  GET_RESTO_DATA_ERROR,
  GET_RESTO_REVIEW_SUCCESS,
  GET_RESTO_REVIEW_PENDING,
  GET_RESTO_REVIEW_ERROR,
  GET_RESTO_DETAIL_SUCCESS,
  GET_RESTO_DETAIL_PENDING,
  GET_RESTO_DETAIL_ERROR
} from './action.types'
import axios from 'axios'

export const getResto = () => {
  return dispatch => {
    dispatch(getRestoPending())
    axios({
      method: 'get',
      url: 'https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&q=food',
      headers: {
        'user-key': '0bd221047f44b2055e1e1e69efa43a14'
      }

    }).then((response) =>
      dispatch(getRestoSuccess(response.data.restaurants)))
    .catch(error => {
      dispatch(getRestoError())
    })
  }
}

export const getReview = (restoid) => {
  return dispatch => {
    dispatch(getRestoReviewPending())
    axios({
      method: 'get',
      url: `https://developers.zomato.com/api/v2.1/reviews?res_id=${restoid}`,
      headers: {
        'user-key': '0bd221047f44b2055e1e1e69efa43a14'
      }
    }).then((response) => 
        dispatch(getRestoReviewSuccess(response.data.user_reviews)))
      .catch(error => {
        dispatch(getRestoReviewError())
      })
  }
}

export const getDetail = (restoid) => {
  return dispatch => {
    dispatch(getRestoDetailPending())
    axios({
      method: 'get',
      url: `https://developers.zomato.com/api/v2.1/restaurant?res_id=${restoid}`,
      headers: {
        'user-key': '0bd221047f44b2055e1e1e69efa43a14'
      }
    }).then((response) =>
      dispatch(getRestoDetailSuccess({
        name: response.data.name,
        location: response.data.location.address,
        cuisines: response.data.cuisines,
        avgCost: response.data.average_cost_for_two,
        image: response.data.thumb,
        rating: response.data.user_rating.rating_text
      })))
      .catch(error => {
        dispatch(getRestoDetailError())
      })
  }
}


const getRestoSuccess = (data) => ({
  type: GET_RESTO_DATA_SUCCESS,
  payload: data
})

const getRestoPending = () => ({
  type: GET_RESTO_DATA_PENDING
})

const getRestoError = () => ({
  type: GET_RESTO_DATA_ERROR
})

const getRestoDetailSuccess = (data) => ({
  type: GET_RESTO_DETAIL_SUCCESS,
  payload: data
})

const getRestoDetailPending = () => ({
  type: GET_RESTO_DETAIL_PENDING
})

const getRestoDetailError = () => ({
  type: GET_RESTO_DETAIL_ERROR
})

const getRestoReviewSuccess = (data) => ({
  type: GET_RESTO_REVIEW_SUCCESS,
  payload: data
})

const getRestoReviewPending = () => ({
  type: GET_RESTO_REVIEW_PENDING
})

const getRestoReviewError = () => ({
  type: GET_RESTO_REVIEW_ERROR
})


