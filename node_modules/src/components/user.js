import '../index.css';
import { useEffect, useState } from 'react';
//useEffect(()=>{

   // return()={===>it is used inside the useeffect when we unmount the page or move from that aboutus
        //console.log("render")
  //  }
//})
const User=({name})=>{
    const[count]=useState(0);
    const[count2]=useState(2);

    return(
        <div className="user-card">
            <h1>Count={count}</h1>
            <h1>Count2={count2}</h1>
            <h2>Name:{name}</h2>
            <h3>Location:Hyderabad</h3>
            <h4>Contact:sreenivesh225@gmail.com</h4>

        </div>
    )
}
export default User;



//React life cycle should not be compared with functional components