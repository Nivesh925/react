import { LOGO_URL } from "../utils/contants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    
    const [btnNameReact,setBtnNameReact]=useState("Login");
    const onlinestatus=useOnlineStatus();
    console.log("Header render");
    //if no dependency array => useeffect is called on every render
    useEffect(()=>{
        console.log("useEffect called");//every time header component rendered useeffect is called
    },[btnNameReact])//if the dependency array is empty=>useEffect is called only on initial render and just once
    //if dependency array is=>[btnNameReact] =>called everytime btnNameReact is updated
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>

            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li>Online Status:{onlinestatus ? "green" : "red" }</li>
                    <li><Link to={"/contactus"}>Contactus</Link></li>
                    <li><Link to={"/about"}>AboutUs</Link></li>
                    <li><Link to={"/cart"}>Cart</Link></li>
                    <li>Address</li>
                    <li><Link to={"/grocery"}>Grocery</Link></li>
                    <button className="Login" onClick={()=>{btnNameReact =="Login"? setBtnNameReact("Logout"): setBtnNameReact("Login"); }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};
export default Header;