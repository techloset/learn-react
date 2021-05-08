import {useState, useEffect} from "react";

function LifeCycleInHooksChild({date,something}) {
   
    useEffect( ()=>{

     console.log("child useEffect >> componentDidMount");
    } , [])

    useEffect( ()=>{
         return ()=> console.log("useEffect >> componentWillUnMount");
        } , [])
        

    useEffect( ()=>{
        console.log("child useEffect, change in props or state", date);
     } , [date])


     useEffect( ()=>{
        console.log("child useEffect, change in props or state", date);
     } , [something])

    useEffect(() => {
        console.log("child useEffect >> componentDidUpdate");
    })

    console.log("child render in hooks");
    return (
        <div> date in child hooks: {date}</div>
    )
}

export default LifeCycleInHooksChild;