'use client';


import { useEffect, useMemo } from 'react';
import { UserButton } from './features/auth/components/user-button';
import { useGetWorkspaces } from './features/workspace/api/use-get-workspaces';
import { useCreateWorkspaceModal } from './features/workspace/store/use-create-workspace-modal';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useGetWorkspaces();
  const [open, setOpen] = useCreateWorkspaceModal();

  const workSpaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workSpaceId) {
      router.replace(`/workspace/${workSpaceId}`);
    } else if (!open) {
      setOpen(true);
    }
  }, [isLoading, workSpaceId, open, setOpen, router]);

  return (
    <div>
      <h1>Home</h1>
      <UserButton />
    </div>
  );
}
