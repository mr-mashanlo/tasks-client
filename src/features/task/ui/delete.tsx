import { FC } from 'react';
import { DropdownItem } from '@/shared/ui';

interface Props {
  id: string,
  handleClose?: () => void
}

const Delete: FC<Props> = ( { id, handleClose, ...others } ) => {

  async function handleButtonClick() {
    try {
      console.log( id );
    } catch ( error ) {
      console.error( error );
    }
  };

  return <DropdownItem {...others} type="button" label="Delete" handleClick={() => handleButtonClick()} handleClose={handleClose} />;
};

export default Delete;