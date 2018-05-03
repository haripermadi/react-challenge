import {GET_RESTO_DATA,
  GET_RESTO_REVIEW} from './action.types'

export const getRestoData = (data) => ({
  type: GET_RESTO_DATA,
  payload: data
})

export const getRestoReview = (data) => ({
  type: GET_RESTO_REVIEW,
  payload: data
})