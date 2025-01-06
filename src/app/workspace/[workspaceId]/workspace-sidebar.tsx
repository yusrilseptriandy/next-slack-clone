import { useCurrentMember } from '@/app/features/members/api/use-current-member';
import { useGetWorkspace } from '@/app/features/workspace/api/use-get-workspace';
import { useWorkspaceId } from '@/hooks/use-workspace-id';
import { AlertTriangle, Loader } from 'lucide-react';

export const WorkspaceSidebar = () => {
  const workspaceId = useWorkspaceId();

  const { data: member, isLoading: memberLoading } = useCurrentMember({
    workspaceId,
  });
  const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace({
    id: workspaceId,
  });

  if (memberLoading || workspaceLoading) {
    return (
      <div className="flex flex-col h-full items-center justify-center ">
        <Loader className="size-5 text-white animate-spin" />
      </div>
    );
  }

  if (!workspace || !member) {
    return (
      <div className="flex flex-col h-full items-center justify-center ">
        <AlertTriangle className="size-5 text-white" />
        <p className="font-bold text-white text-sm">Workspace not found</p>
      </div>
    );
  }
  return <div>WorkspaceSidebar</div>;
};
