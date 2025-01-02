import { useGetWorkspace } from '@/app/features/workspace/api/use-get-workspace';
import { Button } from '@/components/ui/button';
import { useWorkspaceId } from '@/hooks/use-workspace-id';
import { Info, Search } from 'lucide-react';

export const Toolbar = () => {
  const workSpaceId = useWorkspaceId();
  const { data } = useGetWorkspace({ id: workSpaceId });
  return (
    <nav className="bg-[#611f69] flex items-center justify-between h-12 p-1.5">
      <div className="flex-1" />
      <div className="min-w-[280px] flex items-center max-[642px] grow-[2] shrink">
        <Button
          size={'sm'}
          className="bg-accent/25 hover:bg-accent/25 w-full justify-start h-9 px-2"
        >
          <Search className="size-4 text-white mr-2" />
          <span className="text-white text-sm">Search {data?.name}</span>
        </Button>
      </div>
      <div className="ml-auto flex-1 flex items-center justify-end">
        <Button variant={'transparent'}>
          <Info className="size-5 text-white" />
        </Button>
      </div>
    </nav>
  );
};
