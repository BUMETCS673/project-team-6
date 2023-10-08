'use client';

import React, { useState } from 'react';
import RoundedInput from './RoundedInput';

interface EditCarProps {
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
  mileageLastOilChange: number;
  mileageLastTireChange: number;
  dateNextTireChange: Date;
  dateNextOilChange: Date;
}

function EditCar({
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
  mileageLastOilChange: initialMileageLastOilChange,
  mileageLastTireChange: initialMileageLastTireChange,
  dateNextTireChange: initialDateNextTireChange,
  dateNextOilChange: initialDateNextOilChange,
}: EditCarProps) {
  const [manufacturer, setManufacturer] = useState(initialManufacturer);
  const [type, setType] = useState(initialType);
  const [year, setYear] = useState(initialYear);
  const [license, setLicense] = useState(initialLicense);
  const [mileage, setMileage] = useState(initialMileage);
  const [model, setModel] = useState(initialModel);
  const [color, setColor] = useState(initialColor);
  const [seats, setSeats] = useState(initialSeats);
  const [condition, setCondition] = useState(initialCondition);
  const [mileageLastOilChange, setMileageLastOilChange] = useState(
    initialMileageLastOilChange,
  );
  const [mileageLastTireChange, setMileageLastTireChange] = useState(
    initialMileageLastTireChange,
  );
  const [dateNextTireChange, setDateNextTireChange] = useState(
    initialDateNextTireChange,
  );
  const [dateNextOilChange, setDateNextOilChange] = useState(
    initialDateNextOilChange,
  );

  return (
    <div className="bg-white rounded-3xl border border-1 shadow-lg shadow-gray-300 py-5 px-10 h-full w-full text-gray-400">
      <div
        className="w-full [font-family:'Lexend_Giga-SemiBold',Helvetica] 
        font-semibold text-gray-400 text-lg mb-10"
      >
        Car ID # {carId}
      </div>
      <div className="flex flex-col w-full">
        <form className="grid grid-cols-2 gap-4">
          <RoundedInput
            type="text"
            placeholder={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
          <RoundedInput
            type="text"
            placeholder={type}
            onChange={(e) => setType(e.target.value)}
          />
          <RoundedInput
            type="number"
            placeholder={year.toString()}
            onChange={(e) => setYear(Number(e.target.value))}
          />
          <RoundedInput
            type="text"
            placeholder={license}
            onChange={(e) => setLicense(e.target.value)}
          />
          <RoundedInput
            type="number"
            placeholder={mileage.toString()}
            onChange={(e) => setMileage(Number(e.target.value))}
          />
          <RoundedInput
            type="text"
            placeholder={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <RoundedInput
            type="text"
            placeholder={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <RoundedInput
            type="number"
            placeholder={seats.toString()}
            onChange={(e) => setSeats(Number(e.target.value))}
          />
          <RoundedInput
            type="text"
            placeholder={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
          <RoundedInput
            type="number"
            placeholder={`Mileage Last Oil Change: ${mileageLastOilChange.toString()}`}
            onChange={(e) => setMileageLastOilChange(Number(e.target.value))}
          />
          <RoundedInput
            type="number"
            placeholder={`Mileage Last Tire Change: ${mileageLastTireChange.toString()}`}
            onChange={(e) => setMileageLastTireChange(Number(e.target.value))}
          />
          <RoundedInput
            type="date"
            placeholder={`Next Date Oil Change: ${dateNextOilChange.toString()}`}
            onChange={(e) => setDateNextOilChange(new Date(e.target.value))}
          />

          <div className=" col-span-1 " />
          <RoundedInput
            type="date"
            placeholder={`Next Date  Tire Change: ${dateNextTireChange.toString()}`}
            onChange={(e) => setDateNextTireChange(new Date(e.target.value))}
          />
          <button
            type="button"
            className="bg-orange-500 col-span-2 place-self-center rounded-3xl px-10 py-1
              [font-family:'Lexend_Giga-SemiBold',Helvetica] my-5
              font-semibold text-white text-lg text-center"
          >
            Edit Car
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditCar;
