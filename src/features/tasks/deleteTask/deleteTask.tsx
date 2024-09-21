import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { twMerge } from 'tailwind-merge';
import { deleteTask } from './deleteTaskService';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  id: string,
  className?: string
}

const DeleteTask: FC<Props> = ( { id, className } ) => {
  const queryClient = useQueryClient();
  const mutation =useMutation( deleteTask, { onSuccess: () => queryClient.invalidateQueries( 'tasks' ) } );

  async function handleClick() {
    try {
      mutation.mutate( id );
    } catch ( error ) {
      return error;
    }
  }

  return (
    <button onClick={() => handleClick()} className={twMerge( 'flex items-center justify-center duration-300', className )}>
      <span className="material-symbols-rounded text-[1.25rem] text-gray-500">delete</span>
    </button>
  );
};

export default DeleteTask;