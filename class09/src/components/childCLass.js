import React, { Component } from "react";

class ChildClass extends Component {
  constructor(props) {
    super(props);
    console.log("child constructor");
  }

  componentDidMount() {
    console.log("child componentDidMount");
   
  }

  componentWillMount() {
    console.log("child componentWillMount");
  }

  componentWillUnmount(){
    console.log("child componentWillUnMount");
  }

  componentWillReceiveProps(props){
      if(props.date){
// s
      }
      if(props.something){
// sdf
      }
    console.log("child componentWillReceiveProps",props);
  }

  componentDidUpdate(){
 console.log("child componentDidUpdate");
  }

  shouldComponentUpdate(){
    console.log("child shouldComponentUpdate");
    return true
  }

  componentDidCatch(error){
    console.log("child componentDidCatch");
  }

  updateDate = () =>{
    this.setState({
        date: new Date().toISOString()
    })
  }

  render() {
    console.log("child render");
    const { date } = this.props;
    return <div> child render method {date}</div>;
  }
}

export default ChildClass;

// first time flow
// constructor > componentWillMount > render > componentDidUpdate > shouldComponentUpdate > render ...

// if state or props update, methods will re render
// render > componentDidUpdate
