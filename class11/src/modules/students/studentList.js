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