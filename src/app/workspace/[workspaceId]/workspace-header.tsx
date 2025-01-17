import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Doc } from '../../../../convex/_generated/dataModel';
import { ChevronDown, Dot, ListFilter, SquarePen } from 'lucide-react';
import { getWorkspaceColor } from '@/utils/get-workspace-color';
import { Separator } from '@/components/ui/separator';
import { Hint } from '@/components/hint';

interface WorkspaceHeaderProps {
  workspace: Doc<'workspace'>;
  isAdmin: boolean;
}

export const WorkspaceHeader = ({
  workspace,
  isAdmin,
}: WorkspaceHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-4 h-[49px] gap-0.5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="font-semibold  text-xl w-auto overflow-hidden p-2"
            variant={'transparent'}
            size={'sm'}
          >
            <span className="truncate">{workspace.name}</span>
            <ChevronDown className="size-4 ml-1 shrink-0" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="start" className="w-64">
          <DropdownMenuItem className="capitalize cursor-pointer">
            <div
              className="size-9 relative overflow-hidden text-white font-semibold text-lg rounded-md flex justify-center items-center mr-2 truncate "
              style={{ backgroundColor: getWorkspaceColor(workspace.name) }}
            >
              {workspace.name.charAt(0).toUpperCase() +
                workspace.name.charAt(1).toLowerCase()}
            </div>
            <span className="truncate">{workspace.name}</span>
            <Dot className="text-green-500 animate-pulse" />
            <p className="text-[10px] text-nowrap text-muted-foreground">
              Active
            </p>
          </DropdownMenuItem>
          {isAdmin && (
            <>
              <Separator />
              <DropdownMenuItem
                className="cursor-pointer h-10"
                onClick={() => {}}
              >
                Invite people to {workspace.name}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer h-10"
                onClick={() => {}}
              >
                Preference
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex items-center gap-0.5">
        <Hint label="Filter conversations" side="bottom">
          <Button variant={'transparent'}>
            <ListFilter className="size-4" />
          </Button>
        </Hint>

        <Hint label="New message" side="bottom">
          <Button variant={'transparent'}>
            <SquarePen className="size-4" />
          </Button>
        </Hint>
      </div>
    </div>
  );
};
