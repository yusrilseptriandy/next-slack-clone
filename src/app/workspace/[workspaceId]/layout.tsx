'use client';

import { Sidebar } from './sidebar';
import { Toolbar } from './toolbar';

interface WorkSpaceIdLayoutProps {
  children: React.ReactNode;
}

const WorkSpaceIdLayout = ({ children }: WorkSpaceIdLayoutProps) => {
  return (
    <div className="h-full">
      <Toolbar />
      <div className="flex h-[calc(100vh-48px)]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default WorkSpaceIdLayout;
