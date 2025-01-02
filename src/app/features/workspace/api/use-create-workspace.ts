import { useCallback, useMemo, useState } from 'react';
import { api } from '../../../../../convex/_generated/api';
import { useMutation } from 'convex/react';
import { Id } from '../../../../../convex/_generated/dataModel';

type RequestType = { name: string };
type ResponseType = Id<'workspace'> | null;
type Options = {
  onSuccess?: (data: ResponseType) => void;
  onError?: (error: Error) => void;
  onSettled?: () => void;
  throwError?: boolean;
};

export const useCreateWorkspace = () => {
  const [data, setData] = useState<ResponseType>(null);
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<
    'success' | 'error' | 'settled' | 'pending' | null
  >(null);

  const isPending = useMemo(() => status === 'pending', [status]);
  const isSuccess = useMemo(() => status === 'success', [status]);
  const isError = useMemo(() => status === 'error', [status]);
  const isSettled = useMemo(() => status === 'settled', [status]);

  const mutation = useMutation(api.workspace.create);
  const mutate = useCallback(
    async (values: RequestType, option?: Options) => {
      try {
        setData(null);
        setError(null);
        setStatus('pending');

        const response = await mutation(values);
        option?.onSuccess?.(response);
        return response;
      } catch (error) {
        option?.onError?.(error as Error);
        if (option?.throwError) {
          throw error;
        }
      } finally {
        setStatus('settled');
        option?.onSettled?.();
      }
    },
    [mutation]
  );

  return {
    data,
    error,
    isPending,
    isSuccess,
    isError,
    isSettled,
    mutate,
  };
};
