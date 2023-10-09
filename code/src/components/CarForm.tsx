import RoundedInput from './RoundedInput';

export default function CarForm({
  handleSubmit,
  manufacturer,
  setManufacturer,
  type,
  setType,
  year,
  setYear,
  license,
  setLicense,
  mileage,
  setMileage,
  model,
  setModel,
  color,
  setColor,
  seats,
  setSeats,
  condition,
  setCondition,
  mileageLastOilChange,
  setMileageLastOilChange,
  mileageLastTireChange,
  setMileageLastTireChange,
  children,
}) {
  return (
    <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
      <RoundedInput
        type="text"
        placeholder={manufacturer}
        onChange={(e) => setManufacturer(e.target.value)}
      />
      <RoundedInput
        type="text"
        placeholder={type}
        onChange={(e) => setType(e.target.value)}
      />
      <RoundedInput
        type="number"
        placeholder={year}
        onChange={(e) => setYear(Number(e.target.value))}
      />
      <RoundedInput
        type="text"
        placeholder={license}
        onChange={(e) => setLicense(e.target.value)}
      />
      <RoundedInput
        type="number"
        placeholder={mileage}
        onChange={(e) => setMileage(Number(e.target.value))}
      />
      <RoundedInput
        type="text"
        placeholder={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <RoundedInput
        type="text"
        placeholder={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <RoundedInput
        type="number"
        placeholder={seats}
        onChange={(e) => setSeats(Number(e.target.value))}
      />
      <RoundedInput
        type="text"
        placeholder={condition}
        onChange={(e) => setCondition(e.target.value)}
      />
      <RoundedInput
        type="number"
        placeholder={`Mileage Last Oil Change: ${mileageLastOilChange}`}
        onChange={(e) => setMileageLastOilChange(Number(e.target.value))}
      />
      <RoundedInput
        type="number"
        placeholder={`Mileage Last Tire Change: ${mileageLastTireChange}`}
        onChange={(e) => setMileageLastTireChange(Number(e.target.value))}
      />

      {children}
    </form>
  );
}
