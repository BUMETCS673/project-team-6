'use client';

import { useState, useEffect } from 'react';
import DashboardLayout from '../../../components/DashboardLayout';
import CarResultBar from '../../../components/CarResultBar';

const logger = require('pino')();

function Headers({ children }) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-3">
        <p>{children}</p>
      </div>
    </div>
  );
}
type Car = {
  _id: string;
  manufacturer: string;
  model: string;
  type: string;
  // ... any other properties ...
};
export default function Page() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const getAllCars = async () => {
      try {
        const response = await fetch('/api/carInfo', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();

        setCars(data);
      } catch (error) {
        logger.log(error);
      }
    };
    getAllCars();
  }, []);

  return (
    <DashboardLayout>
      {/* 4 info search */}
      <div className="flex flex-row justify-between mb-5">
        <Headers>Car ID</Headers>
        <Headers>Manufacturer</Headers>
        <Headers>Model</Headers>
        <Headers>Car Type</Headers>
      </div>

      {/* Results display */}
      <div className="flex flex-col gap-4">
        {cars.map((car) => (
          <CarResultBar
            // eslint-disable-next-line no-underscore-dangle
            key={car._id}
            // eslint-disable-next-line no-underscore-dangle
            carId={car._id}
            manufacturer={car.manufacturer}
            model={car.model}
            carType={car.type}
          />
        ))}
      </div>
    </DashboardLayout>
  );
}
