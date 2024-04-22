//  app component : it will act as an parent component for the nested components

import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

//  explore btn css
import "./css/explorebtn.css"
import Footer from "./components/Footer";



const App = () => {
  const navlinks = [
    {
      name: "Home",
      path: "/",
      cName: "nav-links"
    },
    {
      name: "our story",
      path: "/our story",
      cName: "nav-links"
    },
    {
      name: "stores",
      path: "/stores",
      cName: "nav-links"
    },
    {
      name: "contact",
      path: "/contact",
      cName: "nav-links"
    },
    {
      name: "feedback",
      path: "/feedback",
      cName: "nav-links"
    },
    {
      name: "carrer",
      path: "/carrer",
      cName: "nav-links"
    }
  ];
  const primarylinks = [
    {
      name: "breadcakes",
      path: "/",
      cName: "nav-links"
    },
    {
      name: "choclates",
      path: "/",
      cName: "nav-links"
    },
    {
      name: "cookies",
      path: "/",
      cName: "nav-links"
    },
    {
      name: "bakery",
      path: "/",
      cName: "nav-links"
    },
    {
      name: "essentials",
      path: "/",
      cName: "nav-links"
    },
    {
      name: "gift baskets",
      path: "/",
      cName: "nav-links"
    },
  ];
  const secondarylinks = [
{
      name: "e menu",
      path: "/",
      cName: "nav-links"
    },
    {
      name: "e gift guide",
      path: "/",
      cName: "nav-links"
    },
    {
      name: "cake album",
      path: "/",
      cName: "nav-links"
    },
  ]
  const navheading = `Nik Baker's`;
  const navsubheading = `run by a professional baker from australia`;
  return (
    <div className="">
      {/* navbar */}
      <Navbar navheading={navheading} navsubheading={navsubheading} navlinks={navlinks} primarylinks={primarylinks} secondarylinks={secondarylinks}/>
        <Home />
        <Footer/>
    </div>
  );
};

export default App;
