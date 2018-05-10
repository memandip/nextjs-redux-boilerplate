import {FETCH_NEWS} from "../actions/actionType";

let initialState = {
    isLoading:true,
    news:[]
}

export default function news(state = initialState, action){
    switch(action.type){
        case FETCH_NEWS:
            return Object.assign({}, state, {
                isLoading:false,
                news:action.payload
            })
        default:
            return state;
    }
}