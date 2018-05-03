import {createStore} from 'redux'

const dataResto = []

const reducers =(state=dataResto, action) => {
  switch(action.type) {
    case 'Get_Resto_Data':
    return [...state, action.payload]
    default:
    return state
  }
}

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store