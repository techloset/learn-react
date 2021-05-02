import { useState } from "react";
function Home() {

    const [name, setName] = useState("naveed")

    const customers = ["naveed", "umar", "ali"];


    const onChangeHanlder= (e)=>{
        setName(e.target.value)
    }


    return (
        <div> 
            <p>Hosting - automation test</p>
            <p>Name: {name}</p>
            <input placeholder="enter your name" onChange={onChangeHanlder}/>

            {/* map method */}
            
            {customers.map((customerName)=>{
                return (
                    <p>{customerName}</p>
                )
            })}
        </div>
    )
}

export default Home;