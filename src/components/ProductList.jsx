import React from "react";
import ProductSlider from "../services/ProductSlider";
// right arrow icon
import rightarrow from "../assets/icons/rightarrow.svg";

const ProductList = ({
  productlistheadingtwo,
  productlistparagraphtwoone,
  productlistparagraphtwotwo,
  productlistparagraphtwothree,
}) => {
  return (
    <div className="">
      <section class="text-white body-font bg-tertiary">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-wrap  divide-x-4">
            <div class="p-4 md:w-1/4">
              <div class="flex rounded-lg h-full bg-transparent p-8 flex-col">
                <div class="flex-grow">
                  <h2 className=" text-4xl text-white">Made With</h2>
                  <h2 className=" text-4xl text-white">NICK ORIGNAL</h2>
                  <h2 className=" text-4xl text-white">RECIPES</h2>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/2">
              <div class="flex rounded-lg h-full bg-transparent p-8 flex-col items-center">
                <div class="flex-grow">
                  <h2 className=" text-5xl text-white uppercase text-center">
                    {productlistheadingtwo}
                  </h2>
                  <div className="flex flex-col items-center mt-2">
                    <h2 className=" text-md text-white capitalize">
                      {productlistparagraphtwoone}
                    </h2>
                    <h2 className=" text-md text-white capitalize">
                      {productlistparagraphtwotwo}
                    </h2>
                    <h2 className=" text-md text-white capitalize">
                      {productlistparagraphtwothree}
                    </h2>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="p-4 md:w-1/4">
              <div class="flex rounded-lg h-full bg-transparent p-8 flex-col">
                <div class="flex-grow">
                  <h2 className=" text-4xl text-white">Made With</h2>
                  <h2 className=" text-4xl text-white">NICK ORIGNAL</h2>
                  <h2 className=" text-4xl text-white">RECIPES</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* slider section */}
      <div className="bg-secondary flex flex-col items-center">
        <div className=" p-20 w-full">
          <ProductSlider />
        </div>
        <div className="flex flex-col  items-center">
          {/* slider heading */}
          <div className="p-4">
           <h2 className="text-4xl text-primary">Made With Nik's Orignal Recipies</h2>
          </div>
          {/* explre btn */}
          <div className="p-2 m-2">
            <button class="button">
              <span className="ml-2">Explore Now</span>
              <span className="">
                <img src={rightarrow} alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
