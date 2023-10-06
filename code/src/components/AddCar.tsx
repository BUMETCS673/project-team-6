'use client';

import React, { useState } from 'react';
import RoundedInput from './RoundedInput';

const logger = require('pino')();

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

function AddCar({
  carId,
  manufacturer: initialManufacturer,
  type: initialType,
  year: initialYear,
  license: initialLicense,
  mileage: initialMileage,
  model: initialModel,
  color: initialColor,
  seats: initialSeats,
  condition: initialCondition,
  oilChange: initialOilChange,
}: AddCarProps) {
  const [manufacturer, setManufacturer] = useState(initialManufacturer);
  const [type, setType] = useState(initialType);
  const [year, setYear] = useState(initialYear);
  const [license, setLicense] = useState(initialLicense);
  const [mileage, setMileage] = useState(initialMileage);
  const [model, setModel] = useState(initialModel);
  const [color, setColor] = useState(initialColor);
  const [seats, setSeats] = useState(initialSeats);
  const [condition, setCondition] = useState(initialCondition);
  const [oilChange, setOilChange] = useState(initialOilChange);

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

    logger.log(
      manufacturerValue,
      typeValue,
      yearValue,
      licenseValue,
      mileageValue,
      modelValue,
      colorValue,
      seatsValue,
      conditionValue,
      oilChangeValue,
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-1 shadow-lg shadow-gray-300 py-5 px-10 h-full w-full text-gray-400">
      <div
        className="w-full [font-family:'Lexend_Giga-SemiBold',Helvetica] 
        font-semibold text-gray-400 text-lg mb-10"
      >
        Car ID # {carId}
      </div>
      <div className="flex flex-col w-full">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="grid grid-cols-2 gap-4"
        >
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
          <button
            type="button"
            className="bg-orange-500 col-span-2 place-self-center rounded-3xl px-10 py-1
              [font-family:'Lexend_Giga-SemiBold',Helvetica] my-5
              font-semibold text-white text-lg text-center"
            // onClick={() => console.error('Hello')}
          >
            Add Car
          </button>
          {/* 
          <div>
            {manufacturer}
            {type}
            {year}
            {license}
            {model}
            {mileage}
            {seats}
            {color}
            {condition}
            {oilChange}
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default AddCar;
