// class component
import React, { Component, useState } from "react";

export default class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
        stuName: "naveed",
        students: ["naveed", "umar", "ali"]
    }
  }

  onChangeHanlder = (e)=>{
      this.setState({stuName: e.target.value})
  }

  render() {
    return (
      <div>
        <p>student Name: {this.state.stuName}</p>
        <input placeholder="student name" onChange={this.onChangeHanlder} />
        {/* map method */}
        list of students
        {this.state.students.map((studentName) => {
          return <p>{studentName}</p>;
        })}
      </div>
    );
  }
}



// functional component
export function StudentsFunction() {
  const [stuName, setName] = useState("naveed");

  const [students, setStudents] = useState(["naveed", "umar", "ali"]);

  const onChangeHanlder = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <p>student Name: {stuName}</p>
      <input placeholder="student name" onChange={onChangeHanlder} />
      {/* map method */}
      list of students
      {students.map((studentName) => {
        return <p>{studentName}</p>;
      })}
    </div>
  );
}
