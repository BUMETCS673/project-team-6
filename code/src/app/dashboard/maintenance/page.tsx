'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import DashboardLayout from '../../../components/DashboardLayout';

export default function page() {
  const scheduled = [
    {
      title: 'Car A',
      start: '2023-10-11T10:00:00',
      end: '2023-10-11T16:00:00',
      color: '#ff9f89',
    },
    {
      title: 'Car B',
      start: '2023-10-13T10:00:00',
      end: '2023-10-13T16:00:00',
      color: '#ff9f89',
    },
    {
      title: 'Car C',
      start: '2023-10-13T10:00:00',
      end: '2023-10-13T16:00:00',
      color: 'blue',
    },
    { title: 'Car D', start: '2023-10-24', end: '2023-10-28' },
    {
      title: 'Car D Oil Change',
      start: '2023-10-24T10:00:00',
      end: '2023-10-24T11:00:00',
    },
  ];

  return (
    <DashboardLayout>
      <div
        className="bg-white rounded-3xl border border-1 shadow-lg
       shadow-gray-300 py-5 px-10 w-full text-gray-400 h-full"
      >
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={scheduled}
          height="80vh"
        />
      </div>
    </DashboardLayout>
  );
}
