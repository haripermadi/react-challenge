import {
  GET_RESTO_REVIEW
} from './action.types'

const reducers =(state=[], action) => {
  switch(action.type) {
    case GET_RESTO_REVIEW:
    return [...action.payload]
    default:
    return state
  }
}

export default reducers