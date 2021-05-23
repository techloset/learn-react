import { useState } from "react";
import {useSelector} from 'react-redux'
import { data } from "./data";

export function useStudents() {
    const [students, setStudents] = useState(data)
    const [errorMessage, setMessage] = useState("");
    const [name, setName] = useState("")
    const [Batch, setBatch] = useState("")
    const [roll, setRoll] = useState("")
    const [stuClass, setStuClass] = useState("")
    const [flag, setFlag] = useState(false);
    const [updatedIndex, setUpdatedIndex] = useState(0)

    // store data
    const studentReducer = useSelector(state => state.studentReducer)
    console.log("studentReducer",studentReducer);
    // end of store data


    // api request for fetching data?

    const deleteHandler = (index) => {
        let newStudents = students.filter((student, i) => {
            if (i !== index) {
                return student;
            }
        });

        setStudents([...newStudents]);
        console.log("newStudents", newStudents);
    }

    const updateHandler = (student, index) => {
        console.log("need to update stu ", student);
        setUpdatedIndex(index);
        setName(student.name);
        setStuClass(student.class);
        setRoll(student.roll);
        setBatch(student.batch);
        setFlag(true);
    }

    const ctaHandler = () => {
        setMessage("")
        if (name != "" && Batch != "" && roll != "" && stuClass != "") {
            let student = {
                name,
                batch: Batch,
                roll,
                class: stuClass
            }
            console.log("student", student);
            setStudents([...students, student]);
            setName("");
            setStuClass("");
            setRoll("");
            setBatch("");

        }
        else {
            setMessage(" Found few of params empty! Params can't be empty.")
        }
    }


    const ctaUpdateHandler = () => {
        setMessage("")
        if (name != "" && Batch != "" && roll != "" && stuClass != "") {
            let student = {
                name,
                batch: Batch,
                roll,
                class: stuClass
            }
            console.log("student", student);

            let updateStudents = students.map((stu,index) => {
                if (updatedIndex === index) {
                    return student
                }
            else {
            return stu;
        }
    })

    setStudents([...updateStudents]);
    setName("");
    setStuClass("");
    setRoll("");
    setBatch("");
    setFlag(false);

}
    else {
    setMessage(" Found few of params empty! Params can't be empty.")
}
    }



return [students,errorMessage,name,Batch,roll,stuClass,flag,updatedIndex,deleteHandler,updateHandler,ctaHandler,ctaUpdateHandler,setName,setBatch,setRoll,setStuClass]
}
