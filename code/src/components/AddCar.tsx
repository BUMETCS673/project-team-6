'use client';

import React, { useState } from 'react';
import CarForm from './CarForm';

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
        <CarForm
          handleSubmit={handleSubmit}
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
          type={type}
          setType={setType}
          year={year}
          setYear={setYear}
          license={license}
          setLicense={setLicense}
          mileage={mileage}
          setMileage={setMileage}
          model={model}
          setModel={setModel}
          color={color}
          setColor={setColor}
          seats={seats}
          setSeats={setSeats}
          condition={condition}
          setCondition={setCondition}
          mileageLastOilChange={mileageLastOilChange}
          setMileageLastOilChange={setMileageLastOilChange}
          mileageLastTireChange={mileageLastTireChange}
          setMileageLastTireChange={setMileageLastTireChange}
        >
          <input
            type="date"
            onChange={(e) => setDateNextOilChange(e.target.value)}
            className="rounded-xl font-normal border-2 border-gray-200 py-2 px-2 text-2xs w-full"
          />
          <input
            type="date"
            onChange={(e) => setDateNextTireChange(e.target.value)}
            className="rounded-xl font-normal border-2 border-gray-200 py-2 px-2 text-2xs w-full"
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
        </CarForm>
      </div>
    </div>
  );
}

export default AddCar;
