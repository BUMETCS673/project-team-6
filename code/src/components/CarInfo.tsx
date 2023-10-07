import React from 'react';

interface CarInfoProps {
  carId: string;
  mileage: number;
  type: string;
  seats: number;
  condition: string;
  license: string;
  oilChange: string;
  model: string;
  color: string;
  year: number;
}

function Filed({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex w-full justify-between text-lg font-semibold">
      <div className="text-gray-500">{label}</div>
      <div className="text-gray-400">{value}</div>
    </div>
  );
}

function CarInfo(props: CarInfoProps) {
  const {
    carId,
    mileage,
    type,
    seats,
    condition,
    license,
    oilChange,
    model,
    color,
    year,
  } = props;
  return (
    <div className="bg-white rounded-3xl border border-1 shadow-lg shadow-gray-300 py-5 px-10 h-full w-full text-gray-400">
      <div
        className="w-full [font-family:'Lexend_Giga-SemiBold',Helvetica] 
        font-semibold text-gray-400 text-lg mb-10"
      >
        Car&nbsp;ID&nbsp;#:&nbsp;{carId}
      </div>

      <div className="grid grid-cols-2 gap-5 gap-x-20 ">
        <Filed label="Mileage:" value={mileage} />
        <Filed label="Next Oil Change:" value={oilChange} />
        <Filed label="Type:" value={type} />
        <Filed label="Model:" value={model} />
        <Filed label="Seat:" value={seats} />

        <Filed label="Color:" value={color} />
        <Filed label="Condition:" value={condition} />
        <Filed label="Year" value={year} />
        <Filed label="License" value={license} />
      </div>
    </div>
  );
}

export default CarInfo;
