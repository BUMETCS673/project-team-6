'use client';

import MainPage from '@/components/MainPage';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
  const { status } = useSession();

  if (status === 'loading') {
    return null;
  }

  if (status === 'authenticated') {
    return redirect('/dashboard/managecars');
  }

  return <MainPage />;
}
