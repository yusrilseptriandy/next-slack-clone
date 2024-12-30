import { useAuthActions } from '@convex-dev/auth/react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SignInFlow } from '../types';
import React, { useState } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { Loader } from 'lucide-react';

interface SignInCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignInCard = ({ setState }: SignInCardProps) => {
  const { signIn } = useAuthActions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');

  const onPasswordSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    signIn('password', { email, password, flow: 'signIn' })
      .catch(() => {
        setError('Invalid email or password');
      })
      .finally(() => {
        setPending(false);
      });
  };

  const handleSignInProvider = (values: 'google' | 'github') => {
    setPending(true);
    signIn(values).finally(() => setPending(false));
  };

  return (
    <Card className="p-8 shadow-none border-none">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-xl font-bold">
          Login to your account
        </CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>

      {!!error && (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
          <FiAlertTriangle className="size-5" />
          <p>{error}</p>
        </div>
      )}

      <CardContent className="space-y-5 px-0 pb-0">
        <form onSubmit={onPasswordSignIn} className="space-y-2.5">
          <Input
            disabled={pending}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
            className="h-12 shadow-none bg-slate-50"
          />

          <Input
            disabled={pending}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
            required
            className="h-12 shadow-none bg-slate-50"
          />

          <Button
            className="w-full font-semibold"
            size={'lg'}
            disabled={pending}
            type="submit"
            variant={'primary'}
          >
            {pending ? (
              <Loader className="size-5 text-muted-foreground animate-spin" />
            ) : (
              'Sign in'
            )}
          </Button>
        </form>

        <Separator />

        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={pending}
            onClick={() => handleSignInProvider('google')}
            variant={'outline'}
            size={'lg'}
            className="w-full relative"
          >
            <FcGoogle className="size-10 absolute left-2.5" />
            Continue with Google
          </Button>

          <Button
            disabled={pending}
            onClick={() => handleSignInProvider('github')}
            variant={'outline'}
            size={'lg'}
            className="w-full relative"
          >
            <FaGithub className="size-5 absolute left-2.5" />
            Continue with Github
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?
          <span
            onClick={() => setState('SignUp')}
            className="text-sky-500 hover:underline cursor-pointer ml-1"
          >
            Sign up
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
