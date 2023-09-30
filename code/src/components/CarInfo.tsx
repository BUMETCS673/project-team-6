import React from 'react';

interface CarInfoProps {
  carId: string;
  mileage: string;
  type: string;
  seats: string;
  condition: string;
  license: string;
  oilChange: string;
  model: string;
  color: string;
  year: string;
  manufacturer: string;
}

function CarInfo(props: CarInfoProps) {
  const {
    carId,
    mileage = '11000',
    type = 'Sedan',
    seats = '5',
    condition,
    license = "000000",
    oilChange = '13000',
    model,
    color = "red",
    year,
    manufacturer,
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
          <div className="w-[308px] h-[45px] bg-white rounded-[10px]  flex flex-row justify-between items-center">
            <div className=" [font-family:'Lexend_Giga-SemiBold',Helvetica] font-medium text-[#b0b4c3] text-[16px] tracking-[0] leading-[normal]">
              <p>Mileage:</p>
            </div>
            <div className="[font-family:'Lexend_Giga-SemiBold',Helvetica] font-normal text-slate-300 text-[16px] text-right tracking-[0] leading-[normal] ">
              <p>{mileage}</p>
            </div>
          </div>

          <div className="w-[308px] h-[45px] bg-white rounded-[10px]  flex flex-row justify-between items-center">
            <div className="[font-family:'Lexend_Giga-SemiBold',Helvetica] font-medium text-[#b0b4c3] text-[16px] tracking-[0] leading-[normal]">
              <p>Type:</p>
            </div>
            <div className="[font-family:'Lexend_Giga-SemiBold',Helvetica] font-normal text-slate-300 text-[16px] text-right tracking-[0] leading-[normal] ">
              <p>{type}</p>
            </div>
          </div>

          <div className="w-[308px] h-[45px] bg-white rounded-[10px]  flex flex-row justify-between items-center">
            <div className="[font-family:'Lexend_Giga-SemiBold',Helvetica] font-medium text-[#b0b4c3] text-[16px] tracking-[0] leading-[normal]">
              <p>Number of Seats:</p>
            </div>
            <div className="[font-family:'Lexend_Giga-SemiBold',Helvetica] font-normal text-slate-300 text-[16px] text-right tracking-[0] leading-[normal] ">
              <p>{seats}</p>
            </div>
          </div>

          <div className="w-[308px] h-[45px] bg-white rounded-[10px]  flex flex-row justify-between items-center">
            <div className="[font-family:'Lexend_Giga-SemiBold',Helvetica] font-medium text-[#b0b4c3] text-[16px] tracking-[0] leading-[normal]">
              <p>Condition::</p>
            </div>
            <div className="[font-family:'Lexend_Giga-SemiBold',Helvetica] font-normal text-slate-300 text-[16px] text-right tracking-[0] leading-[normal] ">
              <p>{condition}</p>
            </div>
          </div>

          <div className="w-[308px] h-[45px] bg-white rounded-[10px]  flex flex-row justify-between items-center">
            <div className="[font-family:'Lexend_Giga-SemiBold',Helvetica] font-medium text-[#b0b4c3] text-[16px] tracking-[0] leading-[normal]">
              <p>License:</p>
            </div>
            <div className="[font-family:'Lexend_Giga-SemiBold',Helvetica] font-normal text-slate-300 text-[16px] text-right tracking-[0] leading-[normal] ">
              <p>{license}</p>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6 font-semibold text-[#cbcedb]">
          <div className="w-[308px] h-[45px] bg-white rounded-[10px]  flex flex-row justify-between items-center">
            <div className="[font-family:'Lexend_Giga-SemiBold',Helvetica] font-medium text-[#b0b4c3] text-[16px] tracking-[0] leading-[normal]">
              <p>Next Oil Change:</p>
            </div>
            <div className="[font-family:'Lexend_Giga-SemiBold',Helvetica] font-normal text-slate-300 text-[16px] text-right tracking-[0] leading-[normal] ">
              <p>{oilChange}</p>
            </div>
          </div>

          <div className="w-[308px] h-[45px] bg-white rounded-[10px]  flex flex-row justify-between items-center">
            <div className="[font-family:'Lexend_Giga-SemiBold',Helvetica] font-medium text-[#b0b4c3] text-[16px] tracking-[0] leading-[normal]">
              <p>Model:</p>
            </div>
            <div className="[font-family:'Lexend_Giga-SemiBold',Helvetica] font-normal text-slate-300 text-[16px] text-right tracking-[0] leading-[normal] ">
              <p>{model}</p>
            </div>
          </div>

          <div className="w-[308px] h-[45px] bg-white rounded-[10px]  flex flex-row justify-between items-center">
            <div className="[font-family:'Lexend_Giga-SemiBold',Helvetica] font-medium text-[#b0b4c3] text-[16px] tracking-[0] leading-[normal]">
              <p>Color:</p>
            </div>
            <div className="[font-family:'Lexend_Giga-SemiBold',Helvetica] font-normal text-slate-300 text-[16px] text-right tracking-[0] leading-[normal] ">
              <p>{color}</p>
            </div>
          </div>

          <div className="w-[308px] h-[45px] bg-white rounded-[10px]  flex flex-row justify-between items-center">
            <div className="[font-family:'Lexend_Giga-SemiBold',Helvetica] font-medium text-[#b0b4c3] text-[16px] tracking-[0] leading-[normal]">
              <p>Year:</p>
            </div>
            <div className="[font-family:'Lexend_Giga-SemiBold',Helvetica] font-normal text-slate-300 text-[16px] text-right tracking-[0] leading-[normal] ">
              <p>{year}</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default CarInfo;
