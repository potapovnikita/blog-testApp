import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const middlewares = [
    thunk,
]

const initialState = {
    postsList: [],
}

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))


export default store