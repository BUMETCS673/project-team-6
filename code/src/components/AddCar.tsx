'use client';

import React, { useState } from 'react';
import RoundedInput from './RoundedInput';
import { type MessageProps, Message } from './Message';

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
  // TODO set next 4
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mileageLastOilChange, setMileageLastOilChange] = useState(1000);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mileageLastTireChange, setMileageLastTireChange] = useState(6000);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dateNextTireChange, setDateNextTireChange] = useState(Date);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dateNextOilChange, setDateNextOilChange] = useState(Date);

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
          mileageLastTireChange,
          dateNextTireChange,
          dateNextOilChange,
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
            <RoundedInput
              type="text"
              defaultValue={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
            />
            <RoundedInput
              type="text"
              defaultValue={type}
              onChange={(e) => setType(e.target.value)}
            />
            <RoundedInput
              type="number"
              defaultValue={year.toString()}
              onChange={(e) => setYear(Number(e.target.value))}
            />
            <RoundedInput
              type="text"
              defaultValue={license}
              onChange={(e) => setLicense(e.target.value)}
            />
            <RoundedInput
              type="number"
              defaultValue={mileage.toString()}
              onChange={(e) => setMileage(Number(e.target.value))}
            />
            <RoundedInput
              type="text"
              defaultValue={model}
              onChange={(e) => setModel(e.target.value)}
            />
            <RoundedInput
              type="text"
              defaultValue={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <RoundedInput
              type="number"
              defaultValue={seats.toString()}
              onChange={(e) => setSeats(Number(e.target.value))}
            />
            <RoundedInput
              type="text"
              defaultValue={condition}
              onChange={(e) => setCondition(e.target.value)}
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
