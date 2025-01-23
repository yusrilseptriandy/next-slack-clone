import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useCreateWorkspaceModal } from '../store/use-create-workspace-modal';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useCreateWorkspace } from '../api/use-create-workspace';
import React, { useState } from 'react';
import { Loader } from 'lucide-react';
import { toast } from 'sonner';

export const CreateWorkspaceModal = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useCreateWorkspaceModal();
  const [name, setName] = useState('');

  const { mutate, isPending } = useCreateWorkspace();

  const handleClose = () => {
    setIsOpen(false);
    setName('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(
      { name },
      {
        onSuccess(id) {
          toast.success('Workspace created successfully');
          router.push(`/workspace/${id}`);
          handleClose();
        },
        onError() {
          toast.error('Workspace name is required!');
        },
      }
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new workspace</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            disabled={isPending}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 bg-slate-50 shadow-none"
            autoFocus
            minLength={3}
            placeholder="Workspace name e.g. 'My Project', 'Team Workspace', etc."
          />
          <div className="flex justify-end">
            <Button variant={'primary'} disabled={isPending}>
              {isPending ? (
                <>
                  Creating{' '}
                  <Loader className="text-muted-foreground size-5 animate-spin" />
                </>
              ) : (
                'Create'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
