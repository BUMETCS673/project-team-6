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


  function handleSubmit(event) {
    event.preventDefault(); 

    const manufacturerValue = manufacturer;
    const typeValue = type;
    const yearValue = year;
    const licenseValue = license;
    const mileageValue = mileage;
    const modelValue = model;
    const colorValue = color;
    const seatsValue = seats;
    const conditionValue = condition;
    const oilChangeValue = oilChange;


    console.log('Form submitted!');
  }

  return (
    <div className="w-[977px] h-[545px] top-0 left-0 bg-white rounded-[25px] shadow-[0px_4px_10px_#cbcedb] flex flex-col justify-center items-center">
      {/* car id  */}
      <div className="relative h-8 w-8 ">
        <div className="absolute left-0 top-0 h-16 w-16 [font-family:'Lexend_Giga-SemiBold',Helvetica] font-semibold text-[#cbcedb] text-[16px] tracking-[0] leading-[normal]">
          Car ID # {carId}
        </div>
      </div>

      <div className="flex flex-row gap-24">
        <form  onSubmit={(e) => handleSubmit(e)}  >

          <div className=" grid grid-cols-2 gap-6 font-semibold text-[#cbcedb]">

            <RoundedInput
              type="text"
              placeholder="Manufacturer"
              onChange={(e) => setManufacturer(e.target.value)}
            />

            <RoundedInput
              type="text"
              placeholder="Type"
              onChange={(e) => setType(e.target.value)}
            />

            <RoundedInput
              type="number"
              placeholder="Year"
              onChange={(e) => setYear(Number(e.target.value))}
            />

            <RoundedInput
              type="text"
              placeholder="License"
              onChange={(e) => setLicense(e.target.value)}
            />

            <RoundedInput
              type="number"
              placeholder="Mileage"
              onChange={(e) => setMileage(Number(e.target.value))}
            />

            {/* Right column */}

            <RoundedInput
              type="text"
              placeholder="Model"
              onChange={(e) => setModel(e.target.value)}
            />

            <RoundedInput
              type="text"
              placeholder="Color"
              onChange={(e) => setColor(e.target.value)}
            />

            <RoundedInput
              type="number"
              placeholder="Seats"
              onChange={(e) => setSeats(Number(e.target.value))}
            />

            <RoundedInput
              type="text"
              placeholder="Condition"
              onChange={(e) => setCondition(e.target.value)}
            />

            <RoundedInput
              type="text"
              placeholder="Oil Change"
              onChange={(e) => setOilChange(e.target.value)}
            />
          </div>

          <div className="flex flex-col items-center justify-center pt-5">
            <button
              type="button"
              className="w-[150px] h-[40px] top-0 left-0  bg-orange-500 rounded-2xl mr-2 [font-family:'Lexend_Giga-SemiBold',Helvetica] font-normal text-[#f8f8f7] text-[18px] text-center "
              onClick={() => console.log('Hello')}
            >
              Add Car
            </button>
          </div>
        </form>
      </div>

      {/* Button div */}
    </div>
  );
}

export default AddCar;
