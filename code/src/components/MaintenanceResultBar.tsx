import React from 'react';

interface MaintenanceBarProps {
  carId: String;
  maintenanceNeeded: string;
  scheduled: string;
}

function MaintenanceResultBar(props: MaintenanceBarProps) {
  const { carId, maintenanceNeeded, scheduled } = props;
  return (
    <div className="flex relative items-center h-[65px]  bg-white rounded-[5px] shadow-[0px_4px_10px_#cbcedb]">
      <div className="flex-grow">
        <p>...</p>
      </div>

      {/* Display Car ID result */}
      <div className="flex-grow">
        <p className="w-[233px] top-0 left-0 [font-family:'Lexend_Giga-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Car ID: {carId}
        </p>
      </div>

      {/* Display Manufacturer result */}
      <div className="flex-grow">
        <p className="w-[233px] top-0 left-0 [font-family:'Lexend_Giga-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          maintenance Needed: {maintenanceNeeded}
        </p>
      </div>

      {/* Display Model result */}
      <div className="flex-grow">
        <p className="w-[233px] top-0 left-0 [font-family:'Lexend_Giga-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Scheduled: {scheduled}
        </p>
      </div>

      {/* Future Feature Button */}
    </div>
  );
}

export default MaintenanceResultBar;
