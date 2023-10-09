'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import CarForm from './CarForm';

const logger = require('pino')();

type Message = {
  text: string;
  type: 'red' | 'green';
};

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
  const [message, setMessage] = useState<Message | null>(null);
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

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }
      const data = await response.json();
      setMessage({ type: 'green', text: data.message });
    } catch (error) {
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
        <CarForm
          handleSubmit={handleSubmit}
          manufacturer={carInfo?.manufacturer}
          setManufacturer={setManufacturer}
          type={carInfo?.type}
          setType={setType}
          year={carInfo?.year}
          setYear={setYear}
          license={carInfo?.license}
          setLicense={setLicense}
          mileage={carInfo?.mileage}
          setMileage={setMileage}
          model={carInfo?.model}
          setModel={setModel}
          color={carInfo?.color}
          setColor={setColor}
          seats={carInfo?.seats}
          setSeats={setSeats}
          condition={carInfo?.condition}
          setCondition={setCondition}
          mileageLastOilChange={carInfo?.mileageLastOilChange}
          setMileageLastOilChange={setMileageLastOilChange}
          mileageLastTireChange={carInfo?.mileageLastTireChange}
          setMileageLastTireChange={setMileageLastTireChange}
        >
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
            Edit Car
          </button>
        </CarForm>
      </div>
    </div>
  );
}

export default EditCar;
