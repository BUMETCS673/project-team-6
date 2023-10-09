const rotationMileageTire = 50000;
const rotationMileageOil = 4500;

export function isMaintenanceTypeRequired(
  lastMileageChange: number,
  rotationMileage: number,
  currMileage: number,
): boolean {
  const nextMileageNeedChange = lastMileageChange + rotationMileage;

  if (currMileage > nextMileageNeedChange) {
    return true;
  }

  return false;
}

export function determineMaintenanceStatus(data: any, currMileage: number) {
  const maintenanceStatus = {
    oilOverdue: false,
    tireOverdue: false,
    maintenanceRequired: false,
  };

  // Determine overdue status based on mileage
  maintenanceStatus.oilOverdue = isMaintenanceTypeRequired(
    data.mileageLastOilChange,
    rotationMileageOil,
    currMileage,
  );
  maintenanceStatus.tireOverdue = isMaintenanceTypeRequired(
    data.mileageLastTireChange,
    rotationMileageTire,
    currMileage,
  );

  // Calculate overdue status based on date
  const currentDate = new Date();
  if (
    data.dateNextOilChange &&
    new Date(data.dateNextOilChange) < currentDate
  ) {
    maintenanceStatus.oilOverdue = true;
  }
  if (
    data.dateNextTireChange &&
    new Date(data.dateNextTireChange) < currentDate
  ) {
    maintenanceStatus.tireOverdue = true;
  }

  maintenanceStatus.maintenanceRequired =
    maintenanceStatus.oilOverdue || maintenanceStatus.tireOverdue;

  return maintenanceStatus;
}
