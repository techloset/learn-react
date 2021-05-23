import './App.css';
import Students from './modules/students/student';
import { useSelector, useDispatch } from "react-redux";
import Header from './components/header/header'
import { addStudent } from "./redux/actions/studentActions";
import {fetchFollowers } from "./redux/actions/githubAction";

function App() {
   const dispatch = useDispatch();
  const store = useSelector(store => store)
  console.log("store in app js",store);

  const user = useSelector(store => store.authReducer.user)
  console.log("user",user);

  const ctaHandlerForGithub = () =>{

    let dataPassToAction = "naveed-rana";
    dispatch(fetchFollowers(dataPassToAction))

  }

  const ctaHandler = () => {
    let dataPassToStore = {
      agNo:"2015-ag--5563", 
      createdAt: new Date()
     }
     

     console.log("data in react component",dataPassToStore );

     dispatch( addStudent(dataPassToStore))

    //  pass this data to action dataPassToStore



  }

  return (
    <div className="App">
      {/* <p>name from redux store {name}</p> */}

      <button onClick={ctaHandlerForGithub}>fetch Github Followers</button>
      <button onClick={ctaHandler}>update it</button>
      <Header />
       <Students />
      
    </div>
  );
}

export default App;
