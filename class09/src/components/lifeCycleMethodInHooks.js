import {useState, useEffect} from "react";
import LifeCycleInHooksChild from "./childHooks";

function LifeCycleInHooks(params) {
   
    const [date, setDate] = useState(new Date().toISOString())

    useEffect( ()=>{
        setInterval(() => {
            setDate(new Date().toISOString())
        }, 1000);
     console.log("parent useEffect >> componentDidMount");
    } , [])

    useEffect( ()=>{
         return ()=> console.log("parent useEffect >> componentWillUnMount");
        } , [])


    useEffect(() => {
        console.log("parent useEffect >> componentDidUpdate");
    })

    console.log("parent render in hooks");
    return (
        <div> date in hooks: {date}
        <LifeCycleInHooksChild date ={date} />
        </div>
    )
}

export default LifeCycleInHooks;