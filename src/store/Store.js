import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from "./Reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    userReducer,
    composeEnhancers(applyMiddleware(thunk))
);