
let initialState = {
    isLogin: true,
    user: {name:"manan", email:"some@techloset.com"}
    }
    
    
    function authReducer(state=initialState, action) {
    
        switch (action.type) {
            case "USER_LOGIN":
                // work  / logic will be here
              let newState = { 
                ...state,
                isLogin:true,
                newData: action.payload
              }
              return newState
        
            default:
               return state
        }
        
    }
    
    export default authReducer;