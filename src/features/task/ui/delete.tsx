import { FC } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { removeTask } from '@/entities/task/api';
import { DropdownItem } from '@/shared/ui';

interface Props {
  id: string,
  handleClose?: () => void
}

const Delete: FC<Props> = ( { id, handleClose, ...others } ) => {
  const queryClient = useQueryClient();
  const mutation =useMutation( removeTask, { onSuccess: () => queryClient.invalidateQueries( 'tasks' ) } );

  async function handleButtonClick() {
    try {
      mutation.mutate( id );
    } catch ( error ) {
      console.error( error );
    }
  };

  return <DropdownItem {...others} type="button" label="Delete" handleClick={() => handleButtonClick()} handleClose={handleClose} />;
};

export default Delete;