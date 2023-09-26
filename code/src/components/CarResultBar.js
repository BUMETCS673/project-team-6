import React from 'react';

const CarResultBar = ({ carId, manufacturer, model, carType }) => {
  return (
    <div className="flex relative items-center h-[65px]  bg-white rounded-[5px] shadow-[0px_4px_10px_#cbcedb]">
      <div className="flex-grow">
        <button>...</button>
      </div>

      {/* Display Car ID result */}
      <div className="flex-grow">
        <p className="w-[233px] top-0 left-0 [font-family:'Lexend_Giga-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Car ID: {carId}
        </p>
      </div>

      {/* Display Manufacturer result */}
      <div className="flex-grow">
        <p className="w-[233px] top-0 left-0 [font-family:'Lexend_Giga-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Manufacturer: {manufacturer}
        </p>
      </div>

      {/* Display Model result */}
      <div className="flex-grow">
        <p className="w-[233px] top-0 left-0 [font-family:'Lexend_Giga-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Model: {model}
        </p>
      </div>

      {/* Display Car Type result */}
      <div className="flex-grow">
        <p className="w-[233px] top-0 left-0 [font-family:'Lexend_Giga-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Car Type: {carType}
        </p>
      </div>

      {/* Future Feature Button */}
    </div>
  );
};

export default CarResultBar;
