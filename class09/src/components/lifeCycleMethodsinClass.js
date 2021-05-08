import React, { Component } from "react";
import ChildClass from "./childCLass";

class MethodsInClass extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
    this.state = {
      date: new Date().toISOString(),
    };
  }

  componentDidMount() {
    console.log("parent componentDidMount");

    this.clearSetID = setInterval(()=>{
        console.log("setInterval");
        this.updateDate()
    }, 5000);
   

    // setTimeout(()=>{
    //     console.log("setTimeout");
    //     clearInterval(this.clearSetID)
    //     this.updateDate()
    // } , 5000);
   
  }

  componentWillMount() {
    console.log("parent componentWillMount");
  }

  componentWillUnmount(){
    console.log("parent componentWillUnMount");
  }

  componentWillReceiveProps(){
    console.log("parent componentWillReceiveProps");
  }

  componentDidUpdate(){
 console.log("parent componentDidUpdate");
  }

  shouldComponentUpdate(){
    console.log("parent shouldComponentUpdate");
    return true
  }

  componentDidCatch(error){
    console.log("parent componentDidCatch");
  }

  updateDate = () =>{
    this.setState({
        date: new Date().toISOString()
    })
  }

  render() {
    console.log("parent render");
    const { date } = this.state;
    return (<div> 
        parent  render method {date}
        <ChildClass date = {date} />
        </div>)
  }
}

export default MethodsInClass;

// first time flow
// constructor > componentWillMount > render > componentDidUpdate > shouldComponentUpdate > render ...

// if state or props update, methods will re render
// render > componentDidUpdate
