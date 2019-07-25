import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import * as reducer from './Store/Reducer/index';
import CaptchaComponent from './CaptchaComponent/CaptchaComponent';


let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const rootReducer = combineReducers({
    load: reducer.loadNewCaptcha
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

// store.dispatch = addPromiseSupportToDispatch(store);

const Captcha = (
    <Provider store={store}>
        <CaptchaComponent />
    </Provider>
)

export default Captcha;