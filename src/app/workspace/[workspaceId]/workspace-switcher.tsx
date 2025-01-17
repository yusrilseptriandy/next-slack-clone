'use client';

import { useGetWorkspace } from '@/app/features/workspace/api/use-get-workspace';
import { useGetWorkspaces } from '@/app/features/workspace/api/use-get-workspaces';
import { useCreateWorkspaceModal } from '@/app/features/workspace/store/use-create-workspace-modal';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useWorkspaceId } from '@/hooks/use-workspace-id';
import { getWorkspaceColor } from '@/utils/get-workspace-color';
import { Dot, Loader, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Separator } from '@/components/ui/separator';

export const WorkspaceSwitcher = () => {
  const router = useRouter();

  const workspaceId = useWorkspaceId();
  const [_open, setOpen] = useCreateWorkspaceModal();

  const { data: workspaces } = useGetWorkspaces();
  const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace({
    id: workspaceId,
  });

  const filterWorkspaces = workspaces?.filter(
    (workspace) => workspace?._id !== workspaceId
  );

  const indexNameOne = workspace?.name.charAt(0).toUpperCase();
  const indexNameTwo = workspace?.name.charAt(1).toLowerCase();

  const nameLogo = indexNameOne + indexNameTwo!;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={`size-10 relative overflow-hidden font-semibold text-xl transition-colors`}
          style={{
            backgroundColor: workspace
              ? getWorkspaceColor(workspace.name)
              : '#ABABAB',
            opacity: 1,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.scale = '0.95';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.scale = '1';
          }}
        >
          {workspaceLoading ? (
            <Loader className="size-4 text-muted-foreground animate-spin " />
          ) : (
            nameLogo
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="start" className="w-64">
        <DropdownMenuItem
          onClick={() => router.push(`/workspace/${workspaceId}`)}
          className=" cursor-pointer capitalize  flex justify-between"
        >
          <div className="flex justify-center space-x-3 items-center">
            <Button
              className={`size-9 relative overflow-hidden font-semibold text-xl transition-colors`}
              style={{
                backgroundColor: workspace
                  ? getWorkspaceColor(workspace.name)
                  : '#ABABAB',
                opacity: 1,
              }}
            >
              {nameLogo}
            </Button>
            <span>{workspace?.name}</span>
          </div>
          <span className="text-xs font-semibold text-muted-foreground flex items-center">
            active
            <Dot className="size-7 text-green-500" />
          </span>
        </DropdownMenuItem>
        {filterWorkspaces?.map((workspace) => (
          <DropdownMenuItem
            key={workspace._id}
            className="cursor-pointer capitalize h-11"
            onClick={() => router.push(`/workspace/${workspace._id}`)}
          >
            <div
              className="size-9 relative overflow-hidden text-white font-semibold text-lg rounded-md flex justify-center items-center mr-2"
              style={{ backgroundColor: getWorkspaceColor(workspace.name) }}
            >
              {workspace.name.charAt(0).toUpperCase() +
                workspace.name.charAt(1).toLowerCase()}
            </div>
            <span className="truncate">{workspace.name}</span>
          </DropdownMenuItem>
        ))}
        <Separator />
        <DropdownMenuItem
          className="cursor-pointer mt-1 bg-green-500 focus:bg-green-600 font-semibold rounded-full"
          onClick={() => setOpen(true)}
        >
          <div className="size-9 relative overflow-hidden bg-green-600 text-white font-semibold text-lg rounded-full flex justify-center items-center mr-2">
            <Plus />
          </div>
          <p className="text-white">Create a new workspace</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
