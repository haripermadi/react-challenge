import {createStore} from 'redux'

const reducers =(state={dataResto:[], dataReview:[]}, action) => {
  switch(action.type) {
    case 'GET_RESTO_DATA':
    return ({
      ...state,
      dataResto: action.payload
    })
    case 'GET_RESTO_REVIEW':
    return ({
      ...state,
      dataReview: action.payload
    })
    default:
    return state
  }
}

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store