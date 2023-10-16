'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import RoundedInput from './RoundedInput';
import { type MessageProps, Message } from './Message';

const logger = require('pino')();

// eslint-disable-next-line max-lines-per-function
function EditCar() {
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
  const [dateNextTireChange, setDateNextTireChange] = useState('');
  const [dateNextOilChange, setDateNextOilChange] = useState('');
  const [message, setMessage] = useState<MessageProps | null>(null);
  const searchParams = useSearchParams()!;
  const carId = searchParams.get('carId');

  useEffect(() => {
    const getCarsInfo = async () => {
      if (!carId) return;
      try {
        const response = await fetch(`/api/carInfo?carId=${carId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();

        setManufacturer(data.manufacturer);
        setType(data.type);
        setYear(data.year);
        setLicense(data.license);
        setMileage(data.mileage);
        setModel(data.model);
        setColor(data.color);
        setSeats(data.seats);
        setCondition(data.condition);
        setMileageLastOilChange(data.mileageLastOilChange);
        setMileageLastTireChange(data.mileageLastTireChange);
        setDateNextTireChange(data.dateNextTireChange);
        setDateNextOilChange(data.dateNextOilChange);
        setMessage(data.message);
      } catch (error) {
        logger.info(error);
      }
    };
    getCarsInfo();
  }, [carId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/carInfo?carId=${carId}`, {
        method: 'PUT',
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
        setMessage({ type: 'green', text: 'Car updated' });
      } else {
        const data = await response.json();
        setMessage({
          type: 'red',
          text: data.message ?? 'Something went wrong',
        });
      }
    } catch (error) {
      setMessage({ type: 'red', text: 'Something went wrong' });
      logger.info(error);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-1 shadow-lg shadow-gray-300 py-5 px-10 w-full text-gray-400">
      <div
        className="w-full [font-family:'Lexend_Giga-SemiBold',Helvetica] 
        font-semibold text-gray-400 text-lg mb-10"
      >
        Car ID # {carId}
      </div>
      <div className="flex flex-col w-full">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            Manufacturer
            <RoundedInput
              type="text"
              defaultValue={manufacturer!}
              onChange={(e) => setManufacturer(e.target.value)}
            />
            Type
            <RoundedInput
              type="text"
              defaultValue={type!}
              onChange={(e) => setType(e.target.value)}
            />
            Year
            <RoundedInput
              type="number"
              defaultValue={year!}
              onChange={(e) => setYear(e.target.value)}
            />
            License
            <RoundedInput
              type="text"
              defaultValue={license!}
              onChange={(e) => setLicense(e.target.value)}
            />
            Mileage
            <RoundedInput
              type="number"
              defaultValue={mileage!}
              onChange={(e) => setMileage(e.target.value)}
            />
            Model
            <RoundedInput
              type="text"
              defaultValue={model!}
              onChange={(e) => setModel(e.target.value)}
            />
            Color
            <RoundedInput
              type="text"
              defaultValue={color!}
              onChange={(e) => setColor(e.target.value)}
            />
            Number of Seats
            <RoundedInput
              type="number"
              defaultValue={seats!}
              onChange={(e) => setSeats(e.target.value)}
            />
            Condition
            <RoundedInput
              type="text"
              defaultValue={condition!}
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
            Date Next Oil Change
            <input
              readOnly
              type="date"
              value={dateNextOilChange?.split('T')[0]}
              className="rounded-xl font-normal border-2 border-gray-200 py-2 px-2 text-2xs w-full"
            />
            Date Next Tire Change
            <input
              readOnly
              type="date"
              value={dateNextTireChange?.split('T')[0]}
              className="rounded-xl font-normal border-2 border-gray-200 py-2 px-2 text-2xs w-full"
            />
          </div>
          {message && <Message {...message} />}
          <button
            data-testid="editCarButton"
            type="submit"
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
