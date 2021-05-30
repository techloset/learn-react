import {combineReducers} from 'redux';
import studentReducer from "./reducers/studentsReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    studentReducer
})

export default rootReducer;