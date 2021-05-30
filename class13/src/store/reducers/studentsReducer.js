import { ADD_STUDENT,UPDATE_STUDENT,DELETE_STUDENT,FETCH_STUDENTS } from "../types/types";

let initialState = {
  error:'',
  students: [],
};

function studentReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_STUDENTS:
      console.log("data in reducer from fetch action", action.payload);
      // work  / logic will be her
      return {
        ...state,
        students: action.payload,
      };


    case ADD_STUDENT:
      console.log("data in reducer from action", action.payload);
      // work  / logic will be her
      let newStudents = state.students;
      newStudents.push(action.payload)
      return {
        ...state,
        students: newStudents
      };

    case UPDATE_STUDENT:
      console.log("data in reducer from action", action.payload);
      // work  / logic will be here
      let updatedStudents = state.students.map((item)=>{
        if(action.payload.docID === item.docID){
          return {...action.payload.data,...action.payload.docID}
        }
        else {
          return item
        }
      })
      return {
        ...state,
        students : updatedStudents
      };

    case DELETE_STUDENT:
      console.log("data in reducer for delete action", action.payload);
      let filterStudents = state.students.filter((item)=> item.docID !== action.payload)
      return {
        ...state,
        students: filterStudents
      };

    default:
      return state;
  }
}

export default studentReducer;
