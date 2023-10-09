'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import DashboardLayout from '../../../components/DashboardLayout';
import CarInfo from '../../../components/CarInfo';

const logger = require('pino')();

interface CarInfoProps {
  _id: string;
  manufacturer: string;
  model: string;
  type: string;
  year: number;
  license: string;
  mileage: number;
  color: string;
  seats: number;
  condition: string;
  mileageLastOilChange: string;
  mileageLastTireChange: string;
  dateNextTireChange: string;
  dateNextOilChange: string;
}

export default function Page() {
  const searchParams = useSearchParams()!;
  const carId = searchParams.get('carId');

  const [carInfo, setCarInfo] = useState<CarInfoProps | null>(null);

  useEffect(() => {
    const getCarsInfo = async () => {
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
        logger.log(error);
      }
    };
    getCarsInfo();
  });

  return (
    <DashboardLayout>
      <CarInfo
        carId={carId!}
        mileage={carInfo?.mileage!}
        type={carInfo?.type!}
        seats={carInfo?.seats!}
        condition={carInfo?.condition!}
        license={carInfo?.license!}
        model={carInfo?.model!}
        color={carInfo?.color!}
        year={carInfo?.year!}
        mileageLastOilChange={carInfo?.mileageLastOilChange!}
        mileageLastTireChange={carInfo?.mileageLastTireChange!}
        dateNextTireChange={carInfo?.dateNextTireChange!}
        dateNextOilChange={carInfo?.dateNextOilChange!}
      />
    </DashboardLayout>
  );
}
