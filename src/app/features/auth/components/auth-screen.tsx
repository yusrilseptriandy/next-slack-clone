'use client';

import { useState, useEffect } from 'react';

import { PiSpinnerGapBold } from 'react-icons/pi';
import { SignInFlow } from '../types';
import { SignInCard } from './sign-in-card';
import { SignUpCard } from './sign-up-card';

export function AuthScreen() {
  const [state, setState] = useState<SignInFlow>('SignIn');
  const [loading, setLoading] = useState(false);

  const handleStateChange = (newState: SignInFlow) => {
    setLoading(true);
    setState(newState);
  };

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div className="h-full flex items-center justify-center bg-[#0c2242]">
      {loading ? (
        <PiSpinnerGapBold className="animate-spin text-xl text-gray-500" />
      ) : state === 'SignIn' ? (
        <SignInCard setState={handleStateChange} />
      ) : (
        <SignUpCard setState={handleStateChange} />
      )}
    </div>
  );
}
