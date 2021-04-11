// function StudentList(props) {
//     return (
//         <tr>
//             <td>{props.student.name}</td>
//             <td>{props.student.batch}</td>
//             <td>{props.student.roll}</td>
//             <td>{props.student.class}</td>
//         </tr>
//     )
// }

function StudentList({student, index,deleteHandler, updateHandler}) {

    return (
        <tr>
            <td>{index}</td>
            <td>{student.name}</td>
            <td>{student.batch}</td>
            <td>{student.roll}</td>
            <td>{student.class}</td>
            <td>
                <button onClick={()=> deleteHandler(index)}>
                    delete
                </button>
            </td>

            <td>
                <button onClick={()=> updateHandler(student, index)}>update item</button>
            </td>
        </tr>
    )
}


export default StudentList;