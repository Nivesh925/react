import RestaurauntCard from "./RestaurauntCard";
import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import "../index.css"
import useOnlineStatus from "../utils/useOnlineStatus";


const Body=()=>{
    //local state variable
    const [listOfRestaurants,setListOfRestauraunts]=useState([]);
    const [filteredRestauraunts,setFilteredRestauraunts]=useState([]);
    const [searchText,setsearchText]=useState("");//react is rerendering total body component but only updating input box
    
    //use effect hook
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4465579&lng=78.39125729999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        //optional chaining
        setListOfRestauraunts(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestauraunts(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const onlineStatus=useOnlineStatus();
    if(onlineStatus=== false)
        return(
            <h1>looks like you're offline!! Please check your internet connection;</h1>
        );
    
    //conditional rendering

    

    
    return listOfRestaurants.length===0 ?(<Shimmer />):(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}/>
                    <button onClick={()=>{
                        //filter the restauraunt cards and update the UI
                        //search text
                        console.log(searchText);

                        const filteredRestauraunts=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestauraunts(filteredRestauraunts);


                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4);
                setListOfRestauraunts(filteredList);
                }}>Top Rated Restauraunts</button>
            </div>
            <div className="res-container">
                {filteredRestauraunts.map((restaurant)=>(<Link className="res-card" key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurauntCard  resData={restaurant}/> </Link>))}
            </div>
        </div>
    )
}
export default Body;