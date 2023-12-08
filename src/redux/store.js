import  { applyMiddleware, createStore } from 'redux';
// import configureStore from "@reduxjs/toolkit"
import { thunk } from 'redux-thunk';
import rootReducer from "./reducer/rootReducer"

const store  = createStore( 
rootReducer,
applyMiddleware(thunk)
);

export default store