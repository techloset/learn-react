import React, { Component } from "react";

class Child extends Component {

    constructor(props){
        super(props)
        console.log("child constructor");
        // first run constructor
   
    }

//   life cycle of component
    componentDidMount(){
        console.log("child componentDidMount");
    }

    componentWillUnmount(){
        console.log("child componentWillUnmount");

    }

    componentWillMount(){
       console.log("child componentWillMount");
    }

    shouldComponentUpdate(){
        console.log("child shouldComponentUpdate");
    }

    componentWillReceiveProps(props){
    console.log("componentWillReceiveProps",props);
    }



  render() {
    console.log("render");
    const {date} = this.props;
    return <div>
       child date {date.toString()}
        </div>;
  }
}


export default Child;

// next class
// life cycle - functional , class base
// custom hooks
// redux start