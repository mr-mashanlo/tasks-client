import { ChangeEvent, FC, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { updateTask } from './changeTaskService';

interface Props {
  id: string,
  checked: boolean
}

const ChangeTaskStatus: FC<Props> = ( { id, checked } ) => {
  const queryClient = useQueryClient();
  const mutation =useMutation( updateTask, { onSuccess: () => queryClient.invalidateQueries( 'tasks' ) } );
  const [ defaultChecked, setDefaultChecked ] = useState<boolean>( checked );

  function handleChange( e: ChangeEvent<HTMLInputElement> ) {
    setDefaultChecked( e.target.checked );
    mutation.mutate( { _id: id, completed: e.target.checked } );
  }

  return (
    <label className="w-4 h-4 sm:w-5 sm:h-5 bg-[#C6CAD2] rounded-md duration-500 has-[:checked]:bg-black">
      <input onChange={e => handleChange( e )} checked={defaultChecked} type="checkbox" name="completed" hidden />
    </label>
  );
};

export default ChangeTaskStatus;