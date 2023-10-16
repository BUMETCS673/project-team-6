'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import DashboardLayout from '../../../components/DashboardLayout';
import { Message } from '../../../components/Message';

async function getMaintenanceInfo() {
  let scheduled : object[] = [];

  try {
    const response = await fetch(`/api/carMaintenance`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    if (data.message) {
      return data.message
    }

    for (const dateMaintenance in data) {
      // Create Oil Maintenance Events
      if (data[dateMaintenance]["oil"]) {
        data[dateMaintenance]["oil"].forEach(carMaintenance => {
          if (carMaintenance["oilOverdue"]) {
            scheduled.push({
              title: carMaintenance.carId,
              start: dateMaintenance,
              allDay: true,
              color: 'rgb(220 38 38)'
            })
          } else {
            scheduled.push({
              title: carMaintenance.carId,
              start: dateMaintenance,
              allDay: true,
              color: 'rgb(219 39 119)'
            })
          }
        });
      }
      
      // Create Tire Maintenance Events
      if (data[dateMaintenance]["tire"]) {
        data[dateMaintenance]["tire"].forEach(carMaintenance => {
          if (carMaintenance["tireOverdue"]) {
            scheduled.push({
              title: carMaintenance.carId,
              start: dateMaintenance,
              allDay: true,
              color: 'rgb(30 58 138)'
            })
          } else {
            scheduled.push({
              title: carMaintenance.carId,
              start: dateMaintenance,
              allDay: true,
              color: 'rgb(96 165 250)'
            })
          }
        });
      }
    };

    return scheduled

  } catch (error) {
    return "Error making call to get maintenance info"
  }
}
export default async function page() {
  
  const scheduled = await getMaintenanceInfo()

  return (
    <DashboardLayout>
      <div
        className="bg-white rounded-3xl border border-1 shadow-lg
       shadow-gray-300 py-5 px-10 w-full text-gray-400 h-full"
      >
        {(typeof scheduled === 'string' || scheduled instanceof String) ? 
          <Message 
            type="red"
            text={scheduled.toString()}
          />
          : 
          <>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={scheduled}
            height="80vh"
          />

          <div className="pl-10 bg-red-600 text-white">Oil Maintenance Overdue</div>
          <div className="pl-10 bg-pink-500 text-white">Oil Maintenance Due</div>
          <div className="pl-10 bg-blue-900 text-white">Tire Maintenance Overdue</div>
          <div className="pl-10 bg-blue-400 text-white">Tire Maintenance Due</div>
          </>
        }
      </div>
    </DashboardLayout>
  );
}
