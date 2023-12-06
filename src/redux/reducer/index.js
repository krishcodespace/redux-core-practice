import { GET_DATA,SINGLE_PRODUCT_DATA } from "../action/actionTypes"


const initialState = {
  productData: [],
  singleProduct: [],
  
}

const productReducer = (state=initialState, action) => {
    console.log('action', action)
    switch(action.type){
        case GET_DATA:
          
            return {
              ...state,
              productData : action.payload  
            };

            case SINGLE_PRODUCT_DATA:
              return{
                ...state,
                singleProduct: action.payload,
              }

            default:
              return state;
            
    }
}

export default productReducer;

