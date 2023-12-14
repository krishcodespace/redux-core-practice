import  { applyMiddleware, createStore } from 'redux';
// import configureStore from "@reduxjs/toolkit"
import { thunk } from 'redux-thunk';
import rootReducer from "./reducer/rootReducer"
import { composeWithDevTools } from '@redux-devtools/extension';


const store  = createStore( 
rootReducer,
composeWithDevTools(
   applyMiddleware(thunk) 
)
   
);

export default store