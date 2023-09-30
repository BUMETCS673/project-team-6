import DashboardLayout from '../../../components/DashboardLayout';
import MaintenanceResultBar from '../../../components/MaintenanceResultBar';

export default function page() {
  return (
    <DashboardLayout>
      <div>
        <MaintenanceResultBar
          carId="1234"
          maintenanceNeeded="Maintenance Needed"
          scheduled="Scheduled"
        />
      </div>
    </DashboardLayout>
  );
}
