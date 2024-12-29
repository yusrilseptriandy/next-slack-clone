'use client';

import { Button } from '@/components/ui/button';
import { useAuthActions } from '@convex-dev/auth/react';
import { useState } from 'react';
import { PiSpinnerGapBold } from 'react-icons/pi';

export default function Home() {
  const { signOut } = useAuthActions();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={handleSignOut} disabled={loading}>
        {loading ? <PiSpinnerGapBold className="animate-spin" /> : 'Sign Out'}
      </Button>
    </div>
  );
}
