import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeProductBanner from "../components/HomeProductBanner";
import Features from "../components/Features";
import ProductList from "../components/ProductList";
import ChefContainer from "../components/ChefContainer";
import LocationContainer from "../components/LocationContainer";
import HomeSlider from "../services/HomeSlider";

import img1 from "../assets/store.jpg";
// right arrow icon
import rightarrow from "../assets/icons/rightarrow.svg"

const Home = () => {
  // home banner section
  const homecenterheading = `Loafs You are  sure to love`;
  const homecenterparagraph = `Freshly baked is the assorted variety of breads we bring for you to savour. Prepared with the ﬁnest ingredients come our wholesome sliced & loafs of bread, including Sour Dough, Whole-wheat Bread, Atta, Garlic, Multigrain & Brain Bread.`;
  // features section
  const featuresheading = `good food is ingredient that goes into the making of the happy life .`

  // productlist section 
  const productlistheadingtwo =`crumbly goodness!`
  const productlistparagraphtwoone =`choose from an arrauof butttery and nutty cookies`;
  const productlistparagraphtwotwo =`fresh-out-of-oven rusks also stands`;
  const productlistparagraphtwothree =`presented to be paired with your hot cup of tea`;

  return (
    <div>
      {/*  home banner section */}
      <div className="w-full h-[600px] ">
      {/*  slider container home */}
      <div className="flex flex-col items-center">
        <div className="w-full">
          {/*  slider container */}
          <div className="">
            <HomeSlider />
          </div>
        </div>
        {/* home text container */}
        <div className="p-10 flex flex-col items-center mt-2 border-b-2">
          {/*  home heading */}
          <div className="">
            <h2 className="text-primary text-4xl md:text:4xl md:text-5xl capitalize">
              {homecenterheading}
            </h2>
          </div>
          {/* home paragraph*/}
          <div className="w-[80%]">
            <p className="text-primary text:sm md:text-xl p-2 px-12 md:px-64">{homecenterparagraph}</p>
          </div>
          {/* explre btn */}
          <div className="p-2">
            <button class="button">
              <span className="ml-2">Explore Now</span>
              <span className=""><img src={rightarrow} alt="" /></span>
            </button>
          </div>
        </div>
      </div>
    </div>
      {/* home banner product section */}
      {/* <HomeProductBanner/> */}
      {/* features section  */}
      <div className="w-full h-screen flex flex-col items-center mt-64">
      {/* upperheading */}
      <div className="text-primary text-5xl capitalize text-center">
        {featuresheading}
      </div>
      {/* felx starts here */}
      <div className="w-full h-screen  flex flex-col md:flex-row md:flex-wrap">
    <div className="w-1/2  bg-secondary flex justify-around items-center">
      {/* heading  */}
      <div className=" text-center h-64 flex flex-col items-center">
        <h2 className="text-6xl text-primary capitalize">gift happiness</h2>
        <div className="text-2xl text-primary">
          <p className="py-4">
            With our premier gifting baskets , boxes and hampers , we leave you
            absolutely sploit for choicewhen selecting that perfect presenr for
            your loved once.
          </p>
        </div>
        <div className="">
          {/* explre btn */}
          <div className="p-2 m-2 ">
            <button className="button">
              <span className="ml-2">Explore Now</span>
              <span className="">
                <img src={rightarrow} alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-1/2  bg-red-200 flex justify-around  items-center">
      <img src={img1} alt="" className="w-1/2" />
    </div>
    <div className="w-1/2  bg-red-200 flex justify-around  items-center">
      <img src={img1} alt="" className="w-1/2" />
    </div>
    <div className="w-1/2  bg-secondary flex justify-around items-center">
      {/* heading  */}
      <div className="  text-center h-64 flex flex-col items-center">
        <h2 className="text-6xl text-primary capitalize">gift happiness</h2>
        <div className="text-2xl text-primary">
          <p className="py-4">
            With our premier gifting baskets , boxes and hampers , we leave you
            absolutely sploit for choicewhen selecting that perfect presenr for
            your loved once.
          </p>
        </div>
        <div className="">
          {/* explre btn */}
          <div className="p-2 m-2 ">
            <button className="button">
              <span className="ml-2">Explore Now</span>
              <span className="">
                <img src={rightarrow} alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
      {/*  productlist anmd prioduct slider */}
      <ProductList productlistheadingtwo={productlistheadingtwo} productlistparagraphtwoone={productlistparagraphtwoone} productlistparagraphtwotwo={productlistparagraphtwotwo} 
      productlistparagraphtwothree={productlistparagraphtwothree}
      />
      <ChefContainer/>
      <LocationContainer/> 
    </div>
  );
};

export default Home;
