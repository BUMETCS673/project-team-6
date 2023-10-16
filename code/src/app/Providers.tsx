'use client';

import { SessionProvider } from 'next-auth/react';

interface ProvidersProps {
  children: React.ReactNode;
}

function Providers({ children }: ProvidersProps): JSX.Element {
  return <SessionProvider>{children}</SessionProvider>;
}

export default Providers;
