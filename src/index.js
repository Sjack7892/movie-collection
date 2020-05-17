import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', getMovies);
    yield takeEvery('SEND_DETAILS', getGenres);
    yield takeEvery('EDIT_DETAILS', putDetails);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Request movies from server.
function* getMovies(action){
    try {
        const response = yield axios.get('/movies')
        yield put ({type: "SET_MOVIES", payload: response.data})
    } catch (error) {
        console.log(error);
    }
};

// Request genres from server.
function* getGenres(action){
    console.log(action.payload);
    let id = action.payload.id;
    try {
        const response = yield axios.get(`/genres/${id}`)
        yield put ({type: "SET_GENRES", payload: response.data})
    } catch (error) {
        console.log(error);
    }
};

// Send updated details to server.
function* putDetails(action){
    try {
        yield axios.put('/movie', action.payload)
    } catch (error) {
        console.log(error);
    }
};

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie details.
const details = (state = [], action) => {
    switch (action.type) {
        case 'SEND_DETAILS':
            return action.payload;
        case 'EDIT_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
