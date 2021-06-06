
import {  FETCH_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT, Add_PRODUCTS,FETCH_SINGLE_PRODUCTS,UPDATE_LOADER} from "../types/TypeConstants";


const initialState = {
   allProducts: [{
       color:"red",
       name: 'car',
       model: 'asf',
       price: 100
   }],
   singleProduct: [],
   loader: false,
   
}


function products(state=initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:{
            // logic 

          return {
               ...state,
                allProducts: action.payload,
                loader: true
            }
           
        }

        case FETCH_SINGLE_PRODUCTS:{
            // logic 

          return {
               ...state,
                singleProduct: action.payload,
                loader: true
            }
           
        }

        case Add_PRODUCTS:{
            return state;
        }

        case DELETE_PRODUCT:{
            return state;
        }

        case UPDATE_PRODUCT:{
            return state;
        }

        case UPDATE_LOADER:{
       console.log("reducer call in update loader", action.payload);
            let newState = {
                ...state,
                loader: action.payload
            }
            return newState;
        }
            
    
        default:
        return state;
    }
}

export default products;