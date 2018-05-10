import React, {Component} from "react";
import {createStore, combineReducers} from "redux";
import news from '../reducers/news';
// create a simple reducer
const reducer = (state = {foo: ''}, action) => {
    switch (action.type) {
        case 'FOO':
            return {...state, foo: action.payload};
        default:
            return state
    }
};
// create a store creator
const makeStore = (initialState) => {
    return createStore(
        combineReducers({
            reducer,
            news
        })
        ,
        initialState);
};
export default makeStore;