import React from "react";

const LocationContainer = () => {
  const locations = [
    "amritsar",
    "chandigarh",
    "dehradun",
    "dera bassi",
    "jalandar",
    "jammu",
    "ludhiana",
    "mohali",
    "new delhi",
    "panchkula",
    "patiala",
    "pathankot",
    "barnala",
    "solan",
  ];
  return (
    <div className="w-full h-[550px] bg-red-600 flex flex-col items-center justify-around">
      <div className="flex flex-col md:flex-row w-1/2  justify-around">
        <div className=" py-24 text-white text-4xl text-center">
          <div className="">Locate </div>
          <div className="">Nik Bakers</div>
          <div className="">Near You</div>
        </div>

        <div className="text-white">
          <ul className="">
            {locations.map((location) => {
              return (
                <li key={location} className="">
                  {location}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LocationContainer;
