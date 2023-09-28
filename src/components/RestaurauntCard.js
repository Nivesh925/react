import { CDN_URL } from "../utils/contants";
const RestaurauntCard=(props)=>{
    const {resData}=props;
    const{name,cuisines,avgRating,costForTwo,locality,cloudinaryImageId}=resData?.info;
    return(
        <div >
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{locality}</h4>

            
        </div>
    )
}

export default RestaurauntCard;