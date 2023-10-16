import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

interface CarResultBarProps {
  carId: string;
  manufacturer: string;
  model: string;
  carType: string;
  license: string;
}

function Filed({ value }: { value: string | number }) {
  return (
    <div className="font-semibold flex justify-center h-full w-full items-center">
      <div className="text-gray-400">{value}</div>
    </div>
  );
}

function CarResultBar(props: CarResultBarProps) {
  const { carId, manufacturer, model, carType, license } = props;
  const router = useRouter();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <button
      type="button"
      className="w-full h-14 shadow-lg rounded-sm bg-white"
      onClick={() => {
        router.push(
          `/dashboard/carinformation?${createQueryString('carId', carId)}`,
        );
      }}
    >
      <div className="flex items-center h-full justify-between">
        <Filed value={license} />
        <Filed value={manufacturer} />
        <Filed value={model} />
        <Filed value={carType} />
      </div>
    </button>
  );
}

export default CarResultBar;
