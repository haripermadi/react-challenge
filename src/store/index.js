import {createStore, combineReducers} from 'redux'
import RestoReducer from './Resto/reducers.resto'
import RestoReviewReducer from './Resto/reducers.restoreview'

const reducers = combineReducers({
  dataResto: RestoReducer,
  dataReview: RestoReviewReducer
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store