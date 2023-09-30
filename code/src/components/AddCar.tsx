import React from 'react';

interface AddCarProps {
  carId: string;
  manufacturer: string;
  type: string;
  year: string;
  license: string;
  mileage: string;
  model: string;
  color: string;
  seats: string;
  condition: string;
  oilChange: string;
}

const AddCar = (props:AddCarProps) => {
  const {
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
    oilChange,
  } = props;

  return (
    <div className="w-[977px] h-[545px] top-0 left-0 bg-white rounded-[25px] shadow-[0px_4px_10px_#cbcedb] flex flex-col justify-center items-center">
      {/* car id  */}
      <div className="relative h-8 w-8 ">
        <div className="absolute left-0 top-0 h-16 w-16 [font-family:'Lexend_Giga-SemiBold',Helvetica] font-semibold text-[#cbcedb] text-[16px] tracking-[0] leading-[normal]">
          Car ID # {carId}
        </div>
      </div>

      <div className="flex flex-row gap-24">
        <div className="flex flex-col gap-6 font-semibold text-[#cbcedb]">
          <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
            <input
              className="w-[90%] h-[80%] opacity-75 font-medium text-[#cbcedb] text-[12px] tracking-[0] leading-[normal] "
              type="text"
              placeholder="Manufacturer"
              value={manufacturer}
            />
          </div>

          <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
            <input
              className="w-[90%] h-[80%] opacity-75 font-medium text-[#cbcedb] text-[12px] tracking-[0] leading-[normal] "
              type="text"
              placeholder="Type"
              value={type}
            />
          </div>
          <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
            <input
              className="w-[90%] h-[80%] opacity-75 font-medium text-[#cbcedb] text-[12px] tracking-[0] leading-[normal] "
              type="text"
              placeholder="Year"
              value={year}
            />
          </div>
          <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
            <input
              className="w-[90%] h-[80%] opacity-75 font-medium text-[#cbcedb] text-[12px] tracking-[0] leading-[normal] "
              type="text"
              placeholder="License"
              value={license}
            />
          </div>
          <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
            <input
              className="w-[90%] h-[80%] opacity-75 font-medium text-[#cbcedb] text-[12px] tracking-[0] leading-[normal] "
              type="text"
              placeholder="Mileage"
              value={mileage}
            />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6 font-semibold text-[#cbcedb]">
          <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
            <input
              className="w-[90%] h-[80%] opacity-75 font-medium text-[#cbcedb] text-[12px] tracking-[0] leading-[normal] "
              type="text"
              placeholder="Model"
              value={model}
            />
          </div>

          <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
            <input
              className="w-[90%] h-[80%] opacity-75 font-medium text-[#cbcedb] text-[12px] tracking-[0] leading-[normal] "
              type="text"
              placeholder="Color"
              value={color}
            />
          </div>
          <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
            <input
              className="w-[90%] h-[80%] opacity-75 font-medium text-[#cbcedb] text-[12px] tracking-[0] leading-[normal] "
              type="text"
              placeholder="Seats"
              value={seats}
            />
          </div>
          <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
            <input
              className="w-[90%] h-[80%] opacity-75 font-medium text-[#cbcedb] text-[12px] tracking-[0] leading-[normal] "
              type="text"
              placeholder="Condition"
              value={condition}
            />
          </div>
          <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
            <input
              className="w-[90%] h-[80%] opacity-75 font-medium text-[#cbcedb] text-[12px] tracking-[0] leading-[normal] "
              type="text"
              placeholder="Oil Change"
              value={oilChange}
            />
          </div>
        </div>
      </div>

      {/* Button div */}
      <div className="flex pt-5">
        <button
          type="button"
          className="w-[150px] h-[40px] top-0 left-0  bg-orange-500 rounded-2xl mr-2 [font-family:'Lexend_Giga-SemiBold',Helvetica] font-normal text-[#f8f8f7] text-[18px] text-center "
        >
          Add Car
        </button>
      </div>
    </div>
  );
};

export default AddCar;
