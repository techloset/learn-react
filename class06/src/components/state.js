import { useState } from "react";
import "./style.css";
import naveedImage from "../assets/naveedsarwar.jpg";


function BasicState() {
    //   var in js 
    var count = 3;
    count = 5;
    var userName = "naveed";
    userName = "manan";

    //powerful variable / state  
    const [name, setName] = useState("naveed");
    //   setName("manan");

    //   types of states
    const [flag, setFlag] = useState(true);

    const [price, setPrice] = useState(100);

    const [studentsName, setStudentNames] = useState(["naveed", "ali", "manan"]);

    const [car, setCar] = useState({
        modal: "2015",
        color: "black",
        engine: "232"
    });




    return (
        <div>

            <img style={{ width: 300 }} src={naveedImage} alt="naveed sfa" />

            <h3>List of students name</h3>
            <ul>
                {
                    studentsName.map((name) => {
                        return (
                            <li> {name} </li>
                        )
                    })
                }
            </ul>
            {
                flag && <p>
                    Price : {price}
                </p>
            }


            <p style={{ backgroundColor: flag ? "blue" : "red" }}> car color {car.color} </p>

            {flag ?
                <p> state name is : {name} </p>
                :
                <p> variable name is : {userName} </p>
            }


            <button onClick={() => setFlag(!flag)}> Change flag </button>
        </div>
    )
}

export default BasicState;