import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

export const GET_DATA = "GET_DATA";
export const SINGLE_PRODUCT_DATA = "SINGLE_PRODUCT_DATA";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const ADD_CART = "ADD_CART";
export const SET_PRICE_RANGE = "SET_PRICE_RANGE";
export const SET_FILTER_DATA = 'SET_FILTER_DATA';




export const getData = () => {
   return async (dispatch) =>{
    try {
        const response  = await axios.get("https://dummyjson.com/products");
        const data = response;

        dispatch({
            type: GET_DATA,
            payload: data ,
          });

    } catch (error) {
        console.log('error', error)
    }
   }
}
export const getSingleProductData = (productID) => {
    console.log('productID', productID)
   return async (dispatch) =>{
    try {   
        const response  = await axios.get(`https://dummyjson.com/products/${productID}`);
        const singleitem = response;

        dispatch({
            type: SINGLE_PRODUCT_DATA,
            payload: singleitem ,
          });

    } catch (error) {
        console.log('getsingledataerror', error)
    }
   }
}

export const addProduct = (body) => {
    console.log('body', body)
    
    return async (dispatch) => {
        try{
            const response = await axios.post("https://dummyjson.com/products/add", body)
            const result  = response;

            dispatch({
            type: ADD_ITEM,
            payload: result
            })

        }catch (error) {
            console.log('adddata error', error)
        }
    }
}






export const deleteProduct = (id) => {
    return {
      type: DELETE_ITEM,
      payload: { id },
    };
  };

  export const addToCart = (id) => {
    console.log('actioncart', id);

    return{
        type:ADD_CART,
        payload:{id},
    }
  }

  export const setPriceRange = (min, max)=>{
      console.log('min,max', min,max)
    return{
        type:SET_PRICE_RANGE,
        payload:{min, max}
    }
  }

  export const setFilteredData = (data)=>{
    console.log('actionfilterdata', data)
    return{
        type:SET_FILTER_DATA,
        payload: data
    }
  }

