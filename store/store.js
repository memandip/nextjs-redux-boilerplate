import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import news from '../reducers/news';

const isClient = typeof window !== 'undefined'

const enhancers = compose(
    typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
        ? window.devToolsExtension && window.devToolsExtension()
        : f => f
)

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)

export default initialState => createStoreWithMiddleware(
    combineReducers({ news })
    , initialState,
    enhancers
)