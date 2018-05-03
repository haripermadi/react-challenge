import {GET_RESTO_DATA
} from './action.types'

const reducers =(state=[], action) => {
  switch(action.type) {
    case GET_RESTO_DATA:
    return [...action.payload]
    default:
    return state
  }
}

export default reducers