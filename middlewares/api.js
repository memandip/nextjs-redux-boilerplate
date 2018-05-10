import fetch from 'isomorphic-fetch';

export default () => dispatch => action => {
    if (!action.request || !action.request.url) {
        return dispatch(action);
    }

    const {type} = action;
    const {url, method, data} = action.request;

    delete action.request;
    dispatch(action);

    return fetch(url, {
        method: method || 'GET',
        body: data ? JSON.stringify(data) : undefined,
        headers: {
            'Accept': 'application/json'
        },
    })
        .then(response => {
            return response.json()
        })
        .then(response => dispatch({
            type: type + '_SUCCESS',
            payload: response
        }))
        .catch(err => dispatch({
            type: type + '_ERROR',
            error: err.message || 'Unknown',
            status: (err.response && err.response.status) || 0
        }));
};