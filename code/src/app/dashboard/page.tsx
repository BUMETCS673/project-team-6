'use client';

import { useSession, signOut } from 'next-auth/react';

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <h1>Dashboard</h1>
        <p>You are not signed in</p>
      </>
    );
  }
  return (
    <>
      <h1>Dashboard</h1>
      <p>
        Welcome
        {session?.user?.email}
      </p>
      <button type="button" onClick={() => signOut({ callbackUrl: '/signin' })}>
        Sign out
      </button>
    </>
  );
}
