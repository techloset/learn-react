import { useState, useEffect } from "react";

export function useFetchDashboard() {

    // logics
  const [students, setStatudents] = useState([
    {
      name: "naveed",
      id: 1232,
    },
    {
      name: "Ali",
      id: 23,
    },
    {
      name: "Asif",
      id: 2323,
    },
    {
      name: "Manan",
      id: 23232,
    },
  ]);
//   end of logics 

useEffect(() => {
    console.log("name");
   
}, [])


// return logics
  return [students, setStatudents]
}
// end of views
