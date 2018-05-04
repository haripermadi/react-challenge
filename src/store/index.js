import {createStore, combineReducers, applyMiddleware} from 'redux'
import RestoReducer from './Resto/reducers.resto'
import RestoReviewReducer from './Resto/reducers.restoreview'
import RestoDetail from './Resto/reducers.restodetail'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const reducers = combineReducers({
  dataResto: RestoReducer,
  dataReview: RestoReviewReducer,
  detailResto: RestoDetail
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, logger)
)

export default store