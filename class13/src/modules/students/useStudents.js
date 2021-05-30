import { useState,useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {fetchStudents,addStudent,deleteStudent,updateStudent} from "../../store/actions/studentActions";

export function useStudents() {
    // const [students, setStudents] = useState([])
    const [errorMessage, setMessage] = useState("");
    const [name, setName] = useState("")
    const [Batch, setBatch] = useState("")
    const [roll, setRoll] = useState("")
    const [stuClass, setStuClass] = useState("")
    const [flag, setFlag] = useState(false);
    const [updatedIndex, setUpdatedIndex] = useState(0)
    const [loading, setLoading] = useState(false);
    const [ctaLoading, setCtaLoading] = useState(false);

    const dispatch = useDispatch();
    // store data
    const students = useSelector(state => state.studentReducer.students)
    console.log("students from studentReducer",students);
    // setStudents(studentsData)
    // end of store data


    useEffect(() => {
    //    action call for fetching students
    console.log("call the action in custom hook for fetching setudents from firebase");
    dispatch(fetchStudents(setLoading))
    }, [])

    // api request for fetching data?

    const deleteHandler = (docID) => {
     
        dispatch(deleteStudent(docID, setLoading))
        // setStudents([...newStudents]);
        // console.log("newStudents", newStudents);
    }

    const updateHandler = (student, index) => {
        console.log("need to update stu ", student);
        setUpdatedIndex(student.docID);
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
                class: stuClass,
                createdAt: new Date()
            }
            console.log("student for passing to actions, // call action to add new data in firebase", student);
            
            // call action to add new data in firebase
            dispatch(addStudent(student, setCtaLoading))
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

          console.log("docID", updatedIndex);
            
             dispatch(updateStudent(updatedIndex,student, setLoading))
        }
          
    

    // setStudents([...updateStudents]);
    setName("");
    setStuClass("");
    setRoll("");
    setBatch("");
    setFlag(false);

}
 



return [students,errorMessage,name,Batch,roll,stuClass,flag,updatedIndex,loading,ctaLoading,deleteHandler,updateHandler,ctaHandler,ctaUpdateHandler,setName,setBatch,setRoll,setStuClass]
}
