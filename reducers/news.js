import {FETCH_NEWS, FETCH_NEWS_ERROR, FETCH_NEWS_SUCCESS} from "../actions/actionType";

let initialState = {
    isLoading:true,
    news:[]
}

export default function news(state = initialState, action){
    switch(action.type){
        case FETCH_NEWS:
            return Object.assign({}, state, {
                isLoading:true,
                news:action.payload
            })
        case FETCH_NEWS_SUCCESS:
            return Object.assign({}, state, {
                isLoading:false,
                news:action.payload
            })
        case FETCH_NEWS_ERROR:
            return Object.assign({}, state, {
                isLoading:false,
                news:action.payload
            })
        default:
            return state;
    }
}