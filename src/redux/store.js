import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import reduxLogger from 'redux-logger'

import rootReducers from './modules'

// function that created store
const configureStore = (reducers = {}, preloadedState = {}, middlewares = []) => createStore(
    combineReducers(
        // combines all reducers (parameters) into one
        {
        ...rootReducers,
        ...reducers
        }
    ),
    preloadedState, // optional parameter
    compose(
        // middlewares between reducers and store
        applyMiddleware(
            ...middlewares,
            thunk,
            reduxLogger
        ),
        // to eliminate errors at start/build in development
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default configureStore