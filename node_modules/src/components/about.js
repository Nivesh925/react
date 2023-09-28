import User from "./user";
import "../index.css";
import { Component } from "react";
import Userclass from "./Userclass.js";
class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent constructor")
    }
    componentDidMount(){
        console.log("mount")
    }
    render(){
        console.log("parent render")
        return(
            <div>
                <h1>About Class Component</h1>
                <h2>This is Namaste React</h2>
                <Userclass name={"Rohith45"} location={"Hyderabad"}/>
                <Userclass name={"Kohli18"} location={"Delhi"}/>
                <Userclass name={"Dhoni07"} location={"Chennai"}/> 
            </div>
        )
    }
}

export default About;



 