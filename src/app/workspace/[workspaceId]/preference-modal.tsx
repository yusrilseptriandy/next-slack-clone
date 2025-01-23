import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from '@/components/ui/dialog';
import { TrashIcon } from 'lucide-react';
import { useState } from 'react';

interface PreferenceModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  initialValue: string;
}

export const PreferenceModal = ({
  open,
  setOpen,
  initialValue,
}: PreferenceModalProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, setValue] = useState(initialValue);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 bg-white overflow-hidden">
        <DialogHeader className="p-4 border-b bg-white">
          <DialogTitle>{value}</DialogTitle>
        </DialogHeader>
        <div className="px-4 pb-4 flex flex-col gap-y-2">
          <div className="px-5 py-4 bg-white rounded-lg border cusror-pointer hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">workspace name</p>
              <p className="text-sm text-[#1264a3] cursor-pointer hover:underline font-semibold">
                Edit
              </p>
            </div>
            <p className="text-sm">{value}</p>
          </div>
          <button
            disabled={false}
            onClick={() => {}}
            className="flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50 text-rose-600"
          >
            <TrashIcon className="size-4" />
            <p className="text-sm font-semibold">Delete workspace</p>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
