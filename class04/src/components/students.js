import { useState } from "react";
import { data } from "./data";
import StudentList from './studentsList';

function Students() {
    const [students, setStudents] = useState(data)
    const [errorMessage, setMessage] = useState("");
    const [name, setName] = useState("")
    const [Batch, setBatch] = useState("")
    const [roll, setRoll] = useState("")
    const [stuClass, setStuClass] = useState("")
    const [flag, setFlag] = useState(false);
    const [updatedIndex, setUpdatedIndex] = useState(0)

    // const inputHandlerName = (e)=>{
    //     console.log("e", e.targe.name);
    //     console.log("E ", e.target.value)
    // }\


    // const deleteHandler = (stuname) => {
    //     console.log('name', stuname);

    //    let newStudents =  students.filter((student)=>{
    //      if (student.name !== stuname ) {
    //          return student;
    //      }
    //    });

    //    setStudents([...newStudents]);

    //    console.log("newStudents", newStudents);
    // } 


    const deleteHandler = (index) => {
        // console.log('name', stuname);

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


        // new data add in student list
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




return (
    <div>
        <h1>New Student Add</h1>
        <input type="text" value={name} name="name" placeholder="name" onChange={(e) => setName(e.target.value)} />
        <input type="text" value={Batch} name="s" placeholder="Batch" onChange={(e) => setBatch(e.target.value)} />
        <input type="text" value={roll} placeholder="Roll No." onChange={(e) => setRoll(e.target.value)} />
        <input type="text" value={stuClass} placeholder="Class" onChange={(e) => setStuClass(e.target.value)} />

        {flag ?
            <button onClick={ctaUpdateHandler}>update</button>
            :
            <button onClick={ctaHandler}>submit</button>
        }

        <p style={{ backgroundColor: "red", color: 'white' }}>
            {
                errorMessage
            }
        </p>
        <hr />
        <h1>List of students</h1>
        <table>
            <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Batch</th>
                <th>Roll No</th>
                <th>class</th>
            </tr>

            {
                students.map((item, index) => {
                    return <StudentList index={index} student={item} deleteHandler={deleteHandler} updateHandler={updateHandler} />
                })
            }


        </table>
    </div>
)
}

export default Students;