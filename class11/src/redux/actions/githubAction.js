import { ADD_STUDENT, ERROR_GITHUB_FOLLOWER_API, GITHUB_FOLLOWER_API } from "../constants/type";

export const fetchFollowers = (data) => async(dispatch, previouState) => {
    try {
        let res = await fetch(`https://api.github.com/users/${data}/followers`);
        console.log("res", res);
        const follorwer = await res.json();
        dispatch({
            type: GITHUB_FOLLOWER_API,
            payload:follorwer 
        })

    } catch (error) {
        console.log("error", error);
        dispatch({
            type: ERROR_GITHUB_FOLLOWER_API,
            payload: error
        })
    }


}