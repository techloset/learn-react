import { auth, db } from "../../config/Firebase";

export const LOGIN = "Login";
export const LOGOUT = "LOGOUT";

export const doLogin = (email, password) => async (dispatch) => {
  try {
    // firebase login

    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    var user = userCredential.user;
    console.log("user", user.uid);
    dispatch({
      type: LOGIN,
      payload: user,
    });
  } catch (error) {
      alert(JSON.stringify(error))
    console.log("error", error);
  }
};


export const doSignup = (user) => async (dispatch) => {
  try {
    // firebase login

    const userCredential = await auth.createUserWithEmailAndPassword(user.email, user.password);
    
    var userData = userCredential.user;

    // db firestore
    await db.collection("users").add({
       ...user,
       uid: userData.uid
    })
    
    dispatch({
      type: LOGIN,
      payload: userData,
    });

  } catch (error) {
      alert(JSON.stringify(error))
    console.log("error", error);
  }
};



export const doLogout = () => async (dispatch) => {
    try {
      // firebase login
      const res = await auth.signOut();
      console.log("user", res);
      dispatch({
        type: LOGOUT,
      });
    } catch (error) {
        alert(JSON.stringify(error))
      console.log("error", error);
    }
  };
