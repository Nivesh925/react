import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";//outlet is used for the change of path
import About from "./components/about";
import Contactus from "./components/contactus";
import Error from "./components/error";
import RestaurantMenu from "./components/RestaurantMenu";
/**Header
 *  -logo
 *  -navitems
 * body
 *  -search
 *  -Restauraunt container
 *   -img
 *   -name of res,star,cuisine,delivery time
 *  -card
 * footer
 *  -copyright
 *  -links
 *  -address
 *  -contact
 */
//restrocomponent//

const AppLayout=()=>{
    return (
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
    );
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,//loading
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contactus",
                element:<Contactus/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }

        ],
        errorElement:<Error/>
    },
    
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);