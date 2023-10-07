interface CarResultBarProps {
  carId: string;
  manufacturer: string;
  model: string;
  carType: string;
}

function Filed({ value }: { value: string | number }) {
  return (
    <div className="font-semibold flex justify-center h-full w-full items-center">
      <div className="text-gray-400">{value}</div>
    </div>
  );
}

function CarResultBar(props: CarResultBarProps) {
  const { carId, manufacturer, model, carType } = props;
  return (
    <div className="w-full h-14 shadow-lg rounded-sm bg-white">
      <div className="flex items-center h-full justify-between">
        <Filed value={carId} />
        <Filed value={manufacturer} />
        <Filed value={model} />
        <Filed value={carType} />
      </div>
    </div>
  );
}

export default CarResultBar;
