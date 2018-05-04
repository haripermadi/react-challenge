import {
  GET_RESTO_REVIEW_SUCCESS,
  GET_RESTO_REVIEW_PENDING,
  GET_RESTO_REVIEW_ERROR
} from './action.types'

const initialState = {
  data: [],
  loading: false,
  error: false
}

const reducers =(state={...initialState}, action) => {
  switch(action.type) {
    case GET_RESTO_REVIEW_PENDING:
    return ({
      ...state,
      loading: true
    })
    case GET_RESTO_REVIEW_SUCCESS:
    return ({
      ...state,
      data: action.payload,
      loading: false
    })
    case GET_RESTO_REVIEW_ERROR:
    return ({
      ...state,
      error: true,
      loading: false
    })
    default:
    return state
  }
}

export default reducers