import DashboardLayout from '../../../components/DashboardLayout';
import CarResultBar from '../../../components/CarResultBar';

function SearchField({ children }) {
  return (
    <div className=" flex flex-col items-center w-36 gap-4">
      <p className="[font-family:'Lexend_Giga-Bold',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[normal]">
        {children}
      </p>
      <input
        type="text"
        placeholder="Search"
        className="bg-white border rounded px-2 py-1 focus:outline-none w-full text-[#cbcedb]"
      />
    </div>
  );
}

export default function page() {
  return (
    <DashboardLayout>
      <div>
        {/* 4 info search */}
        <div className="flex flex-row justify-between p-2 px-32  ">
          <SearchField>Car ID</SearchField>
          <SearchField>Manufacturer</SearchField>
          <SearchField>Model</SearchField>
          <SearchField>Car Type</SearchField>
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
