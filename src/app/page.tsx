'use client';


import { useEffect, useMemo } from 'react';
import { UserButton } from './features/auth/components/user-button';
import { useGetWorkspace } from './features/workspace/api/use-get-workspace';
import { useCreateWorkspaceModal } from './features/workspace/store/use-create-workspace-modal';

export default function Home() {
  const { data, isLoading } = useGetWorkspace();
  const [open, setOpen] = useCreateWorkspaceModal();

  const workSpaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workSpaceId) {
      console.log('Redirect to workspace', workSpaceId);
    } else if (!open) {
      setOpen(true);
    }
  }, [isLoading, workSpaceId, open, setOpen]);

  return (
    <div>
      <h1>Home</h1>
      <UserButton />
    </div>
  );
}
