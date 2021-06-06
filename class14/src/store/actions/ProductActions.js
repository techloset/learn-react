import {  FETCH_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT, Add_PRODUCTS,FETCH_SINGLE_PRODUCTS,UPDATE_LOADER} from "../types/TypeConstants";
import axios   from "axios";

export const fetchProducts = (userName) => async(dispatch) =>{

    try {
        // app request
      console.log("data", userName);

        let apiRes = await axios.get(`https://api.github.com/users/${userName}`);
    console.log("apiRes",apiRes.data);
        dispatch({
            type: FETCH_PRODUCTS,
            payload: apiRes.data
        })
         
    } catch (error) {
        console.log("error", error);
    }
}



export const updateLoader = (data) =>{
console.log("data in action, named updateLoader", data);
    return {
     type: UPDATE_LOADER,
     payload: data
    }
}