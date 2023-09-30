import DashboardLayout from '../../../components/DashboardLayout';
import AddCar from '../../../components/AddCar';

export default function page() {
  return (
    <DashboardLayout>
      <div>
        <AddCar
          carId="1"
          manufacturer="Toyota"
          type="Sedan"
          year={2022}
          license="ABC-123"
          mileage={10000}
          model="Camry"
          color="Red"
          seats={5}
          condition="New"
          oilChange="2022-01-01"
        />
      </div>
    </DashboardLayout>
  );
}
