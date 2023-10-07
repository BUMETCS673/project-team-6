import DashboardLayout from '../../../components/DashboardLayout';
import CarResultBar from '../../../components/CarResultBar';

function SearchField({ children }) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-3">
        <p>{children}</p>
        <input
          className="w-32 border-gray-100 border-2 pl-3"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default function page() {
  return (
    <DashboardLayout>
      {/* 4 info search */}
      <div className="flex flex-row justify-between mb-5">
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
    </DashboardLayout>
  );
}
