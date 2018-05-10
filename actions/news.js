import { ADD_NEWS, FETCH_NEWS } from "./actionType";

export function addNews(news){
    return {
        type:ADD_NEWS,
        payload:news
    }
}

export function fetchNews(url){
    url = url && url.length > 0 ? url : 'https://api.hackerwebapp.com/news';
    return {
        type:FETCH_NEWS,
        request:{
            url: url
        }
    };
}