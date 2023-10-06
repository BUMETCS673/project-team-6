import DashboardLayout from '../../../components/DashboardLayout';
import CarInfo from '../../../components/CarInfo';

export default function page() {
  return (
    <DashboardLayout>
      <CarInfo
        carId="2"
        mileage={10000}
        type="Sedan"
        seats={5}
        condition="New"
        license="ABC-123"
        oilChange="2022-01-01"
        model="Camry"
        color="Red"
        year={2022}
      />
    </DashboardLayout>
  );
}
