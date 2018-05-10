import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux'

let reducers = {}
let reduxStore = null

let devtools = f => f
if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
    devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

function create (initialState = {}) {
    return createStore(
        combineReducers({
            ...reducers
        }),
        initialState,
        devtools
    )
}

export default function initStore (initialState) {
    if (!process.browser) {
        return create(initialState)
    }

    if (!reduxStore) {
        reduxStore = create(initialState)
    }
    return reduxStore
}