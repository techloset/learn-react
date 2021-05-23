import StudentList from './studentList';
import {useStudents} from "./useStudent";
function Students() {
    const [students,errorMessage,name,Batch,roll,stuClass,flag,updatedIndex,deleteHandler,updateHandler,ctaHandler,ctaUpdateHandler,setName,setBatch,setRoll,setStuClass] = useStudents();

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