import { UserButton } from '@/app/features/auth/components/user-button';
import { WorkspaceSwitcher } from './workspace-switcher';

export const Sidebar = () => {
  return (
    <aside className="w-[70px] h-full bg-[#611f69] flex flex-col gap-y-4 items-center pt-9 pb-4">
      <WorkspaceSwitcher />
      <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
        <UserButton />
      </div>
    </aside>
  );
};
