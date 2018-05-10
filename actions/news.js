import { ADD_NEWS, FETCH_NEWS } from "./actionType";

export function addNews(news){
    return {
        type:ADD_NEWS,
        payload:news
    }
}

export function fetchNews(news){
    return {
        type:FETCH_NEWS,
        payload:news
    };
}