import { ADD_STUDENT } from "../constants/type";



let initialState = {
name: "naveed",
age: 24,
class: "MS Software Engineering",
students : [],
}


function studentReducer(state=initialState, action) {

    switch (action.type) {
        case ADD_STUDENT:
            console.log("data in reducer from action", action.payload);
            // work  / logic will be here
          let newState = { 
            ...state,
            name: "Ali",
            newData: action.payload
          }
          return newState
    
        default:
           return state
    }
    
}

export default studentReducer;