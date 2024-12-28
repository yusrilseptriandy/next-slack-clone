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

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  return (
    <Card className="p-8 shadow-none border-none">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-xl font-bold">
          Sign up for an account
        </CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder="Email"
            type="email"
            required
            className="h-12 shadow-none bg-slate-50"
          />

          <Input
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder="password"
            type="password"
            required
            className="h-12 shadow-none bg-slate-50"
          />
          <Input
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder="Confirm password"
            type="password"
            required
            className="h-12 shadow-none bg-slate-50"
          />

          <Button
            className="w-full font-semibold"
            size={'lg'}
            disabled={false}
            type="submit"
            variant={'primary'}
          >
            Continue
          </Button>
        </form>

        <Separator />

        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={false}
            onClick={() => {}}
            variant={'outline'}
            size={'lg'}
            className="w-full relative"
          >
            <FcGoogle className="size-10 absolute left-2.5" />
            Continue with Google
          </Button>

          <Button
            disabled={false}
            onClick={() => {}}
            variant={'outline'}
            size={'lg'}
            className="w-full relative"
          >
            <FaGithub className="size-5 absolute left-2.5" />
            Continue with Github
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Have an account?{' '}
          <span
            onClick={() => setState('SignIn')}
            className="text-sky-500 hover:underline cursor-pointer ml-1"
          >
            Sign in
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
