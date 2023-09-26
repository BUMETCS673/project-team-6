import DashboardLayout from '../../../components/DashboardLayout';
import CarResultBar from '../../../components/CarResultBar';

export default function page() {
  return (
    <DashboardLayout>
      <div>
        {/* 4 info search */}
        <div className="flex flex-row justify-between p-2 px-32  ">
          <div className=" flex flex-col items-center w-36 gap-4">
            <p className="[font-family:'Lexend_Giga-Bold',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[normal]">
              Car ID
            </p>
            <input
              type="text"
              placeholder="Search"
              className="bg-white border rounded px-2 py-1 focus:outline-none w-full  text-[#cbcedb]"
             />
          </div>

          <div className="flex flex-col items-center  w-36 gap-4">
            <p className="[font-family:'Lexend_Giga-Bold',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[normal]">
              Manufacturer
            </p>
            <input
              type="text"
              placeholder="Search"
              className="bg-white border rounded px-2 py-1 focus:outline-none w-full  text-[#cbcedb]"
             />
          </div>
          <div className="flex flex-col items-center  w-36 gap-4">
            <p className="[font-family:'Lexend_Giga-Bold',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[normal]">
              Model
            </p>
            <input
              type="text"
              placeholder="Search"
              className="bg-white border rounded px-2 py-1 focus:outline-none w-full  text-[#cbcedb]"
             />
          </div>
          <div className="flex flex-col items-center  w-36 gap-4">
            <p className="[font-family:'Lexend_Giga-Bold',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[normal]">
              Car Type
            </p>
            <input
              type="text"
              placeholder="Search"
              className="bg-white border rounded px-2 py-1 focus:outline-none w-full  text-[#cbcedb]"
             />
          </div>
        </div>

        {/* Results display */}
        <div>
          <CarResultBar
            carId="12345"
            manufacturer="Toyota"
            model="Camry"
            carType="Sedan"
           />
        </div>
      </div>
    </DashboardLayout>
  );
}
