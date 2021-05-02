import React, { Component } from "react";

class Customer extends Component {

    constructor(props){
        // first run constructor
        super(props)

        this.state = {
            customerName: "Naveed"
        }
    }

//   life cycle of component
    componentDidMount(){

    }

    componentWillUnmount(){

    }

    componentWillMount(){

    }

    shouldComponentUpdate(){

    }


    updateHandler = ()=>{
     this.setState({
        customerName: "Ali"
     })
    }



  render() {
    const {customerName} = this.state;
    return <div>
        Class base customer component {customerName}
        </div>;
  }
}


export default Customer;

// next class
// life cycle - functional , class base
// custom hooks
// redux start