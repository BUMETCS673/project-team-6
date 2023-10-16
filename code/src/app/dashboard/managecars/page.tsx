'use client';

import { useDebounce } from '@uidotdev/usehooks';
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
  license: string;
  // ... any other properties ...
};

const DEBOUNCE_TIME = 500;

export default function Page() {
  const [cars, setCars] = useState<Car[]>([]);
  const [manufacturer, setManufacturer] = useState('');
  const [license, setLicense] = useState('');
  const [model, setModel] = useState('');
  const [type, setType] = useState('');

  const debouncedManufacturer = useDebounce(manufacturer, DEBOUNCE_TIME);
  const debouncedLicense = useDebounce(license, DEBOUNCE_TIME);
  const debouncedModel = useDebounce(model, DEBOUNCE_TIME);
  const debouncedType = useDebounce(type, DEBOUNCE_TIME);

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
  }, [debouncedLicense, debouncedManufacturer, debouncedModel, debouncedType]);

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
            license={car.license}
          />
        ))}
      </div>
    </DashboardLayout>
  );
}
