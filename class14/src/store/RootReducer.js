import { combineReducers } from "redux";
import products from "./reducers/ProductReducer";


const rootReducer = combineReducers({
products,
// auth,
// manageUsers

});


export default rootReducer;

