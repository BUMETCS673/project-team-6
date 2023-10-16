'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import RoundedInput from './RoundedInput';
import { type MessageProps, Message } from './Message';

const logger = require('pino')();

interface EditCarProps {
  manufacturer: string;
  type: string;
  year: string;
  license: string;
  mileage: string;
  model: string;
  color: string;
  seats: string;
  condition: string;
  mileageLastOilChange: string;
  mileageLastTireChange: string;
  dateNextTireChange: string;
  dateNextOilChange: string;
}

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
  const [carInfo, setCarInfo] = useState<EditCarProps | null>(null);

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

        setCarInfo(data);
      } catch (error) {
        logger.info(error);
      }
    };
    getCarsInfo();
  }, [carId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/carInfo`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          carId,
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
    <div className="bg-white rounded-3xl border border-1 shadow-lg shadow-gray-300 py-5 px-10 h-full w-full text-gray-400">
      <div
        className="w-full [font-family:'Lexend_Giga-SemiBold',Helvetica] 
        font-semibold text-gray-400 text-lg mb-10"
      >
        Car ID # {carId}
      </div>
      <div className="flex flex-col w-full">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <RoundedInput
              type="text"
              placeholder={carInfo?.manufacturer!}
              onChange={(e) => setManufacturer(e.target.value)}
            />
            <RoundedInput
              type="text"
              placeholder={carInfo?.type!}
              onChange={(e) => setType(e.target.value)}
            />
            <RoundedInput
              type="number"
              placeholder={carInfo?.year!}
              onChange={(e) => setYear(e.target.value)}
            />
            <RoundedInput
              type="text"
              placeholder={carInfo?.license!}
              onChange={(e) => setLicense(e.target.value)}
            />
            <RoundedInput
              type="number"
              placeholder={carInfo?.mileage!}
              onChange={(e) => setMileage(e.target.value)}
            />
            <RoundedInput
              type="text"
              placeholder={carInfo?.model!}
              onChange={(e) => setModel(e.target.value)}
            />
            <RoundedInput
              type="text"
              placeholder={carInfo?.color!}
              onChange={(e) => setColor(e.target.value)}
            />
            <RoundedInput
              type="number"
              placeholder={carInfo?.seats!}
              onChange={(e) => setSeats(e.target.value)}
            />
            <RoundedInput
              type="text"
              placeholder={carInfo?.condition!}
              onChange={(e) => setCondition(e.target.value)}
            />
            <RoundedInput
              type="number"
              placeholder={`Mileage Last Oil Change: ${carInfo?.mileageLastOilChange}`}
              onChange={(e) => setMileageLastOilChange(e.target.value)}
            />
            <RoundedInput
              type="number"
              placeholder={`Mileage Last Tire Change: ${carInfo?.mileageLastTireChange}`}
              onChange={(e) => setMileageLastTireChange(e.target.value)}
            />

            <input
              type="date"
              defaultValue={carInfo?.dateNextOilChange.split('T')[0]}
              onChange={(e) => setDateNextOilChange(e.target.value)}
              className="rounded-xl font-normal border-2 border-gray-200 py-2 px-2 text-2xs w-full"
            />
            <input
              type="date"
              defaultValue={carInfo?.dateNextTireChange.split('T')[0]}
              onChange={(e) => setDateNextTireChange(e.target.value)}
              className="rounded-xl font-normal border-2 border-gray-200 py-2 px-2 text-2xs w-full"
            />
          </div>
          {message && <Message {...message} />}
          <button
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
