'use client';

import React, { useState } from 'react';
import RoundedInput from './RoundedInput';

type Message = {
  text: string;
  type: 'red' | 'green';
};

const logger = require('pino')();

function AddCar() {
  const [manufacturer, setManufacturer] = useState('manufacturer');
  const [type, setType] = useState('type');
  const [year, setYear] = useState(2022);
  const [license, setLicense] = useState('license');
  const [mileage, setMileage] = useState(5000);
  const [model, setModel] = useState('model');
  const [color, setColor] = useState('color');
  const [seats, setSeats] = useState(5);
  const [condition, setCondition] = useState('New');
  const [mileageLastOilChange, setMileageLastOilChange] = useState(1000);
  const [mileageLastTireChange, setMileageLastTireChange] = useState(6000);
  const [dateNextTireChange, setDateNextTireChange] = useState(Date);
  const [dateNextOilChange, setDateNextOilChange] = useState(Date);

  const [message, setMessage] = useState<Message | null>(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/carInfo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          manufacturer,
          type,
          year,
          license,
          mileage,
          model,
          color,
          seats,
          condition,
          mileageLastOilChange,
          mileageLastTireChange,
          dateNextTireChange,
          dateNextOilChange,
        }),
      });
      const data = await response.json();
      setMessage({ type: 'green', text: data.message });
    } catch (error) {
      logger.log(error);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-1 shadow-lg shadow-gray-300 py-5 px-10 h-full w-full text-gray-400">
      <div
        className="w-full [font-family:'Lexend_Giga-SemiBold',Helvetica] 
        font-semibold text-gray-400 text-lg mb-10"
      >
        {/* Car ID # {carId} */}
      </div>
      <div className="flex flex-col w-full">
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
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
            onChange={(e) => setDateNextOilChange(e.target.value)}
          />
          <RoundedInput
            type="date"
            placeholder={`Next Date  Tire Change: ${dateNextTireChange.toString()}`}
            onChange={(e) => setDateNextTireChange(e.target.value)}
          />
          {message && (
            <div className="col-span-2 rounded-3xl px-10 py-1 text-center">
              {message.text}
            </div>
          )}
          <button
            type="submit"
            className="bg-orange-500 col-span-2 place-self-center rounded-3xl px-10 py-1
              [font-family:'Lexend_Giga-SemiBold',Helvetica] my-5
              font-semibold text-white text-lg text-center"
          >
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCar;
