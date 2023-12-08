import {
  GET_DATA,
  SINGLE_PRODUCT_DATA,
  ADD_ITEM,
  DELETE_ITEM,
  ADD_CART,
  SET_PRICE_RANGE,
  SET_FILTER_DATA,
} from "../action/actionTypes";

const initialState = {
  priceRange:null,
  productData: [],
  productData2:[],
  singleProduct: [],
  cartProduct:[],
  productDataDelete:[],
  filterDatahold:null,
};
console.log("🚀 ~ file: index.js:19 ~ initialState.productData:", initialState.productData)

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        productData: action.payload.data?.products,
        productData2:action.payload.data?.products,
      };

    case SINGLE_PRODUCT_DATA:
      return {
        ...state,
        singleProduct: action.payload,
      };

    case ADD_ITEM:
   
      return {
        ...state,
        productData: action.payload,
      };

    case DELETE_ITEM:
      const deleteProduct = state.productData.filter((product) => product.id !== action.payload.id);
      console.log('deleteProduct',action.payload.id)
      return {
        ...state,
        productData: deleteProduct,
        productDataDelete: deleteProduct,
      };

      case ADD_CART:
      const addCartproducts = action.payload
      console.log('addCartProducts', addCartproducts)
      return{
        ...state,
        cartProduct: addCartproducts,
      };
      case SET_PRICE_RANGE:
        return{
         ...state,
        priceRange:[ action.payload.min, action.payload.max],
        }
      case SET_FILTER_DATA:
        const [Min,Max]=action.payload
        const filteredData = state.productDataDelete?.filter((item) => Min <= item?.price && item?.price <= Max)
        return {
          ...state,
          productData:filteredData
        }
     
  

    default:
      return state;
  }
};

export default productReducer;
