import logo from './logo.svg';
import './App.css';
import {db } from "./config/firebase";


function App() {
  const ctaHandler = async() =>{

    let dataToFirebase = {
      name:"ALi",
      company: "techloset Solutions",
      class: "BS Software Engineering",
      id: "2323",
      active: true
    }
  
  try {
    let res = await db.collection("users").add(dataToFirebase)
    console.log("res", res);

  } catch (error) {
    console.log("error", error);
  }


  }

  const ctaFetchHandler = async() =>{
  
  try {
    let data = await db.collection("students").get();
    let students = [];
    data.forEach((doc)=>{
      console.log("id", doc.id);
       students.push({...doc.data(), docID:doc.id})
    })

    console.log("fetch data from firebase", students);

  } catch (error) {
    console.log("error", error);
  }


  }


  const ctaDeleteHandler = async() =>{
  try {
    let res = await db.collection("students").doc("EPup4V5ocEwoWcF6DsCL").delete()
    console.log("res", res);

  } catch (error) {
    console.log("error", error);
  }


  }


  const ctaUpdateHandler = async() =>{

    let dataToFirebase = {
      name:"New Name",
      company: "techloset sd",
    }
  
  try {
    let res = await db.collection("students").doc("47b7XmsivN4GlIJzv91e").update(dataToFirebase)
    console.log("res", res);

  } catch (error) {
    console.log("error", error);
  }


  }
  return (
    <div className="App">

      <button onClick={ctaFetchHandler} > fetch data from firebase </button>
      <button onClick={ctaHandler} > upload data to firebase </button>

      <button onClick={ctaUpdateHandler} > update data in firebase </button>

      <button onClick={ctaDeleteHandler} > delete data in firebase </button>
    </div>
  );
}

export default App;
