import DashboardLayout from '../../../components/DashboardLayout';
import CarResultBar from '../../../components/CarResultBar';
import EditCar from '../../../components/EditCar';

export default function page() {
  return (
    <DashboardLayout>
      <div>
        <EditCar />
      </div>
    </DashboardLayout>
  );
}
