import React, { useState } from "react";

// navbar logo
import navlogo from "../assets/nik-bakers-logo.png";
import { Link } from "react-router-dom";

const Navbar = ({
  navheading,
  navsubheading,
  navlinks,
  primarylinks,
  secondarylinks,
}) => {

  return (
    <>
      {/* upper navbar */}
      <div className="w-full h-36  py-2 px-12 font-paragraph ">
        <div className=" h-full flex flex-row items-center justify-around">
          {/*  heading  */}
          <div className="flex flex-col items-center ">
            <div className="text-xl md:text-5xl text-primary font-bold">{navheading}</div>
            <div className=" text-sm md:text-xl capitalize font-mono">{navsubheading}</div>
          </div>
          {/* logo */}
          <div className="w-1/12 hidden md:block">
            <img src={navlogo} alt="" className="" />
          </div>
          {/* upper navlinks */}
          <div className="hidden md:block">
            <ul className="flex gap-2">
              {navlinks.map(({ name, path }) => {
                return (
                  <Link to={path} key={name}>
                    <li className=" px-2 py-0.5  capitalize text-primary bg-secondary rounded-lg border hover:border-primary">
                      {name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div className="w-full h-16  px-12 border-2 bg-secondary  font-paragraph hidden md:block">
        <div className="flex items-center justify-around mt-4">
          {/* primary links */}
          <div className="">
            <ul className="flex gap-4">
              {primarylinks.map(({ name, path }) => {
                return (
                  <Link to={path} key={name}>
                    <li className=" px-1  capitalize text-primary bg-secondary rounded border hover:border-primary">
                      {name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className=""></div>
          <div className=""></div>
          {/* secondary links */}
          <div className="">
            <ul className="flex gap-4">
              {secondarylinks.map(({ name, path }) => {
                return (
                  <Link to={path} key={name}>
                    <li className=" px-1  capitalize text-primary bg-secondary rounded border hover:border-primary">
                      {name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
