import axios from "axios";

export const GET_DATA = "GET_DATA";
export const SINGLE_PRODUCT_DATA = "SINGLE_PRODUCT_DATA";
export const ADD_ITEM = "ADD_ITEM";



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
        const singleProductData = response;

        dispatch({
            type: SINGLE_PRODUCT_DATA,
            payload: singleProductData ,
          });

    } catch (error) {
        console.log('error', error)
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