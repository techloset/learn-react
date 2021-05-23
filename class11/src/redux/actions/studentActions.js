import { ADD_STUDENT, ERROR_GITHUB_FOLLOWER_API, GITHUB_FOLLOWER_API } from "../constants/type";


export const addStudent = (data) =>{
    console.log("action, data from react component", data);
    return {
        type: ADD_STUDENT,
        payload: data
    }
}


export const fetchFollowers = (data) => async(dispatch, previouState) => {
    try {
        let res = await fetch(`https://api.github.com/users/${data}/followers`);
        console.log("res", res);

        dispatch({
            type: GITHUB_FOLLOWER_API,
            payload: res
        })

    } catch (error) {
        console.log("error", error);
        dispatch({
            type: ERROR_GITHUB_FOLLOWER_API,
            payload: error
        })
    }



  


}