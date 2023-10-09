import { useRouter } from 'next/navigation';

function Filed({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex w-full justify-between text-lg font-semibold">
      <div className="text-gray-500">{label}</div>
      <div className="text-gray-400">{value}</div>
    </div>
  );
}

interface CarInfoProps {
  carId: string;
  mileage: number;
  type: string;
  seats: number;
  condition: string;
  license: string;
  model: string;
  color: string;
  year: number;
  mileageLastOilChange: string;
  mileageLastTireChange: string;
  dateNextTireChange: string;
  dateNextOilChange: string;
}

function CarInfo({
  carId,
  mileage,
  type,
  model,
  seats,
  color,
  condition,
  year,
  license,
  mileageLastOilChange,
  mileageLastTireChange,
  dateNextTireChange,
  dateNextOilChange,
}: CarInfoProps) {
  const router = useRouter();
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
        <Filed label="Type:" value={type} />
        <Filed label="Model:" value={model} />
        <Filed label="Seat:" value={seats} />

        <Filed label="Color:" value={color} />
        <Filed label="Condition:" value={condition} />
        <Filed label="Year" value={year} />
        <Filed label="License" value={license} />
        <Filed label="Mileage last oil change" value={mileageLastOilChange} />
        <Filed label="Mileage last tire change" value={mileageLastTireChange} />
        <Filed label="Date next tire change" value={dateNextTireChange} />
        <Filed label="Date next oil change" value={dateNextOilChange} />
        <button
          type="button"
          className="bg-orange-500 col-span-2 place-self-center rounded-3xl px-10 py-1
              [font-family:'Lexend_Giga-SemiBold',Helvetica] my-5
              font-semibold text-white text-lg text-center"
          onClick={() => {
            router.push(`/dashboard/editcar?carId=${carId}`);
          }}
        >
          Edit This Car
        </button>
      </div>
    </div>
  );
}

export default CarInfo;
