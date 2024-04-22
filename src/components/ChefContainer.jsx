import React from "react";


// right arrow icon
import rightarrow from "../assets/icons/rightarrow.svg";


const ChefContainer = () => {
  return (
    <div className="w-full h-[700px]  mt-10 capitalize flex flex-col items-center bg-secondary">
      <div className="">
        {/* heading */}
        <div className="">
          <h1 className="text-3xl text-tertiary text-center mt-10">
            Food may be the only thing that truly has the power to bring the
            world together .
          </h1>
        </div>
        {/* bg image */}
        <div className="">
          <div className="">
            {/* heading and para section  */}
            <div className="w-full rounded-xl py-20 h-[620px] flex justify-around items-center ">
              <div className="w-1/2 border-2 bg-primary text-secondary h-60 rounded-2xl ">
                <div className="flex justify-around mt-6">
                  <div className="w-1/3"></div>
                  <div className="">
                    <h2 className="text-4xl px-6">
                      a tastefull tale of flavour & quality{" "}
                    </h2>
                    <div className="">
                      <p className="text-xl px-6">
                        nik bakers had rapidly matured into the famous brand
                        known for it's delecatble offerings . cheif nik's
                        passion for frshly-baked , delicious and uniquely
                        designed products is what contributes to its success.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              <div className="ml-36">
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
      </div>
    </div>
  );
};

export default ChefContainer;
