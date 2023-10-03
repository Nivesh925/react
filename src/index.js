import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";//outlet is used for the change of path
import About from "./components/about";
//import Grocery from "./components/Grocery";
import Contactus from "./components/contactus";
import Error from "./components/error";
import RestaurantMenu from "./components/RestaurantMenu";
//Chunking
//code spitting or lazy loading
//dynamic bundling or on demand loading-->to make our app into small bundles to work our app fast
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
const Grocery=lazy(()=>import("./components/Grocery")); //here it only takes grocery path for lazy loading to get a separate bundle for groceries
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
                path:"/grocery",
                element:<Suspense fallback={<h1>loading.....</h1>}><Grocery/></Suspense> //for to not stop rendering


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