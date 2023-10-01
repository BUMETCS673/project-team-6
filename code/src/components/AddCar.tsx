'use client';
import React, { useState } from 'react';
import RoundedInput from './RoundedInput';

interface AddCarProps {
  carId: string;
  manufacturer: string;
  type: string;
  year: number;
  license: string;
  mileage: number;
  model: string;
  color: string;
  seats: number;
  condition: string;
  oilChange: string;
}

function AddCar(props: AddCarProps) {
  const [carId, setCarId] = useState(props.carId);
  const [manufacturer, setManufacturer] = useState(props.manufacturer);
  const [type, setType] = useState(props.type);
  const [year, setYear] = useState(props.year);
  const [license, setLicense] = useState(props.license);
  const [mileage, setMileage] = useState(props.mileage);
  const [model, setModel] = useState(props.model);
  const [color, setColor] = useState(props.color);
  const [seats, setSeats] = useState(props.seats);
  const [condition, setCondition] = useState(props.condition);
  const [oilChange, setOilChange] = useState(props.oilChange);

  return (
    <div className="w-[977px] h-[545px] top-0 left-0 bg-white rounded-[25px] shadow-[0px_4px_10px_#cbcedb] flex flex-col justify-center items-center">
      {/* car id  */}
      <div className="relative h-8 w-8 ">
        <div className="absolute left-0 top-0 h-16 w-16 [font-family:'Lexend_Giga-SemiBold',Helvetica] font-semibold text-[#cbcedb] text-[16px] tracking-[0] leading-[normal]">
          Car ID # {carId}
        </div>
      </div>

      <div className="flex flex-row gap-24">
        <div className="flex flex-col gap-6 font-semibold text-[#cbcedb]">
     
            <RoundedInput
              type="text"
              placeholder="Manufacturer"
              onChange={(e) => setManufacturer(e.target.value)}
            />
        

          <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
            <input
              className="w-[90%] h-[80%] opacity-75 font-medium text-[#cbcedb] text-[12px] tracking-[0] leading-[normal] "
              type="text"
              placeholder="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
            <input
              className="w-[90%] h-[80%] opacity-75 font-medium text-[#cbcedb] text-[12px] tracking-[0] leading-[normal] "
              type="text"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
            />
          </div>
          <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
            <input
              className="w-[90%] h-[80%] opacity-75 font-medium text-[#cbcedb] text-[12px] tracking-[0] leading-[normal] "
              type="text"
              placeholder="License"
              value={license}
              onChange={(e) => setLicense(e.target.value)}
            />
          </div>
          <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
            <input
              className="w-[90%] h-[80%] opacity-75 font-medium text-[#cbcedb] text-[12px] tracking-[0] leading-[normal] "
              type="text"
              placeholder="Mileage"
              value={mileage}
              onChange={(e) => setMileage(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6 font-semibold text-[#cbcedb]">
          <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
            <input
              className="w-[90%] h-[80%] opacity-75 font-medium text-[#cbcedb] text-[12px] tracking-[0] leading-[normal] "
              type="text"
              placeholder="Model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>

          <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
            <input
              className="w-[90%] h-[80%] opacity-75 font-medium text-[#cbcedb] text-[12px] tracking-[0] leading-[normal] "
              type="text"
              placeholder="Color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
            <input
              className="w-[90%] h-[80%] opacity-75 font-medium text-[#cbcedb] text-[12px] tracking-[0] leading-[normal] "
              type="text"
              placeholder="Seats"
              value={seats}
              onChange={(e) => setSeats(Number(e.target.value))}
            />
          </div>
          <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
            <input
              className="w-[90%] h-[80%] opacity-75 font-medium text-[#cbcedb] text-[12px] tracking-[0] leading-[normal] "
              type="text"
              placeholder="Condition"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            />
          </div>
          <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
            <input
              className="w-[90%] h-[80%] opacity-75 font-medium text-[#cbcedb] text-[12px] tracking-[0] leading-[normal] "
              type="text"
              placeholder="Oil Change"
              value={oilChange}
              onChange={(e) => setOilChange(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Button div */}
      <div className="flex pt-5">
        <button
          type="button"
          className="w-[150px] h-[40px] top-0 left-0  bg-orange-500 rounded-2xl mr-2 [font-family:'Lexend_Giga-SemiBold',Helvetica] font-normal text-[#f8f8f7] text-[18px] text-center "
        >
          Add Car
        </button>
      </div>
    </div>
  );
}

export default AddCar;
