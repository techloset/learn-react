
import {useState } from "react";
function BasicState(props) {
  
    var counter = 1;

    const [counterState, setcounterState] = useState(0)

    const increamentCounter = () =>{

      counter = counter + 1;

      setcounterState(counterState+1)

    //   alert(counter);
    }

    const decreamentCounter = () =>{

        counter = counter - 1;
  
        setcounterState(counterState-1)
        
      //   alert(counter);
      }

    return(
        <div>
        <button onClick={decreamentCounter}> - </button>
        
        {counterState}

        <button onClick={increamentCounter}> + </button>

        </div>
    )
}

export default BasicState;