import { ADD_STUDENT, ERROR_GITHUB_FOLLOWER_API, GITHUB_FOLLOWER_API } from "../constants/type";


export const addStudent = (data) =>{
    console.log("action, data from react component", data);
    return {
        type: ADD_STUDENT,
        payload: data
    }
}


