import React from "react";
import '../index.css'
class Useerclass extends React.Component{
    //constructor recieves props in class components
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Normal",
                location:"Default",
                
            }
        }
        console.log(this.props.name +"child constructor called")
    }
    async componentDidMount(){
        console.log(this.props.name +"child component did mount")
        const data=await fetch("https://api.github.com/users/Nivesh925");
        const json=await data.json();
        this.setState({
            userInfo:json
        })
    }
    componentDidUpdate(){
        console.log("It gets updated")
    }
    componentWillUnmount(){
        //removing from ui

        console.log("component unmounted")
    }
    render(){
        //const {name,location}=this.props
        const{name,location}=this.state.userInfo;
        
        console.log(this.props.name +"child render")
        return(
            //this keyword is used to access at any where to access//
            <div className="user-card">
                
                

                
                <h2>Name:{name}</h2>  
                <h3>Location:{location}</h3>
                <h4>Contact:sreenivesh225@gmail.com</h4>
    
            </div>
        )
        
    }
}
export default Useerclass;
//render method helps in displaying th js website