'use client';

import React, { useState } from 'react';
import RoundedInput from './RoundedInput';
import { type MessageProps, Message } from './Message';

const logger = require('pino')();

function AddCar() {
  const [manufacturer, setManufacturer] = useState('');
  const [type, setType] = useState('');
  const [year, setYear] = useState('');
  const [license, setLicense] = useState('');
  const [mileage, setMileage] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [seats, setSeats] = useState('');
  const [condition, setCondition] = useState('');
  const [mileageLastOilChange, setMileageLastOilChange] = useState('');
  const [mileageLastTireChange, setMileageLastTireChange] = useState('');

  const [message, setMessage] = useState<MessageProps | null>(null);
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
          mileageLastTireChange
        }),
      });

      if (response.ok) {
        setMessage({ type: 'green', text: 'Car created' });
      } else {
        const data = await response.json();
        setMessage({ type: 'red', text: data.message });
      }
    } catch (error) {
      setMessage({ type: 'red', text: 'Something went wrong' });
      logger.log(error);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-1 shadow-lg shadow-gray-300 py-5 px-10 h-full w-full text-gray-400">
      <div className="flex flex-col w-full">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            Manufacturer
            <RoundedInput
              type="text"
              defaultValue={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
            />
            Type
            <RoundedInput
              type="text"
              defaultValue={type}
              onChange={(e) => setType(e.target.value)}
            />
            Year
            <RoundedInput
              type="number"
              defaultValue={year.toString()}
              onChange={(e) => setYear(e.target.value)}
            />
            License
            <RoundedInput
              type="text"
              defaultValue={license}
              onChange={(e) => setLicense(e.target.value)}
            />
            Mileage
            <RoundedInput
              type="number"
              defaultValue={mileage.toString()}
              onChange={(e) => setMileage(e.target.value)}
            />
            Model
            <RoundedInput
              type="text"
              defaultValue={model}
              onChange={(e) => setModel(e.target.value)}
            />
            Color
            <RoundedInput
              type="text"
              defaultValue={color}
              onChange={(e) => setColor(e.target.value)}
            />
            Number of Seats
            <RoundedInput
              type="number"
              defaultValue={seats.toString()}
              onChange={(e) => setSeats(e.target.value)}
            />
            Condition
            <RoundedInput
              type="text"
              defaultValue={condition}
              onChange={(e) => setCondition(e.target.value)}
            />
            Mileage Last Oil Change
            <RoundedInput
              type="number"
              defaultValue={mileageLastOilChange}
              onChange={(e) => setMileageLastOilChange(e.target.value)}
            />
            Mileage Last Tire Change
            <RoundedInput
              type="number"
              defaultValue={mileageLastTireChange}
              onChange={(e) => setMileageLastTireChange(e.target.value)}
            />
          </div>
          {message && <Message {...message} />}
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
