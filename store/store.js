import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import api from '../middlewares/api';
import news from '../reducers/news';

function store(initialState){
    return createStore(
        combineReducers({news}),
        initialState,
        applyMiddleware(thunk, api)
    )
};

export default store;