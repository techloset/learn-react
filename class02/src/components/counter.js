import React, {useState} from "react";

function Counter(){
    let counter = 0;
    // more powerful variable than just simple variable like counter
    const [counter2, setCounter] = useState(0)
    const [name, setName] = useState("naveed")
    const [age, setAge] = useState(18)
    const [price, setPrice] = useState(3223.23)


    const increamentHandler = ()=> {
        counter  = counter + 1;
        setCounter(counter2 + 1)
    //  alert("increamentHandler called" + counter)
    }
    
    const decreamentHandler = ()=> {
        counter  = counter - 1;
        setCounter(counter2 - 1)
        // alert("decreamentHandler called" + counter)
    }

    console.log("counter", counter );
    console.log("counter2=>>", counter2 );

    return (
        <div style={{padding:50}}>
          Using Simple Variable
       <button onClick={()=>decreamentHandler(1)}> - </button>
        <span style={{padding:20}}>
           {counter} 
        </span>
        <button onClick={increamentHandler}> + </button>
        <hr/>
        Using React State
        <button onClick={()=>decreamentHandler(1)}> - </button>
        <span style={{padding:20}}>
           {counter2} 
        </span>
        <button onClick={increamentHandler}> + </button>

       </div>
    )
}

export default Counter;

// state ? 
// react will not render the component again if the variable value change

// state - condition - halat