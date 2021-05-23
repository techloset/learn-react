import {
  ADD_STUDENT,
  ERROR_GITHUB_FOLLOWER_API,
  GITHUB_FOLLOWER_API,
} from "../constants/type";

let initialState = {
  followers: [],
  error: "",
};

function githubReducer(state = initialState, action) {
  switch (action.type) {
    case GITHUB_FOLLOWER_API:
      console.log("data in reducer from action", action.payload);
      // work  / logic will be here
      let newState = {
        ...state,
        followers: action.payload,
      };
      return newState;

    case ERROR_GITHUB_FOLLOWER_API:
      console.log("data in reducer from action", action.payload);
      // work  / logic will be here

      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default githubReducer;
