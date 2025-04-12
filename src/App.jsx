import React from "react";
import "./index.css";
import {  createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import How_it_works from "./components/how-it-works/How-it-works";
import Owners from "./components/owners/Owners";
import Contract_request from "./components/contract-request/Contract-request";
import NotFound from "./components/not-found/NotFound";
import TermsOfUse from "./components/terms-of-use/TermsOfUse";
import Privacy from "./components/privacy/Privacy";
import JoinOurTeam from "./components/join-our-team/JoinOurTeam";
import ResidentialContract from "./components/Residential_contract/ResidentialContract";
import CommericalContract from "./components/CommericalContract/CommericalContract";


let routers=createBrowserRouter([
  {
    path:'/',element: <Layout/>, children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'how-it-works',element:<How_it_works/>},
      {path:'oweners',element:<Owners/>},
      {path:'terms-of-use',element:<TermsOfUse/>},
      {path:'privacy',element:<Privacy/>},
      {path:'join-our-team',element:<JoinOurTeam/>},


      { path: "*", element: <NotFound/> },
    ]
    
  },
  {path:'contract-request',element:<Contract_request/>},
  {path:'residential-contract',element:<ResidentialContract></ResidentialContract>},
  {path:'commerical-contract',element:<CommericalContract></CommericalContract>},


  

])

const App = () => {
  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>;
};

export default App;
