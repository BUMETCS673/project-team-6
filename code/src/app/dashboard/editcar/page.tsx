import EditCar from '@/components/EditCar';
import DashboardLayout from '../../../components/DashboardLayout';

export default function page() {
  return (
    <DashboardLayout>
      <EditCar
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
        mileageLastOilChange={5000}
        mileageLastTireChange={10000}
        dateNextTireChange={new Date('2023-01-01')}
        dateNextOilChange={new Date('2025-01-01')}
      />
    </DashboardLayout>
  );
}
