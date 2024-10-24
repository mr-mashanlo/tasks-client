import { FC } from 'react';
import { useAuthStore } from '@/entities/auth/model';
import { logout } from '@/entities/auth/api';
import { DropdownItem } from '@/shared/ui';

interface Props {
  handleClose: () => void
}

const Logout: FC<Props> = ( { handleClose, ...others } ) => {
  const setID = useAuthStore( state => state.setID );

  async function handleButtonClick() {
    try {
      await logout();
      setID( '' );
    } catch ( error ) {
      console.error( error );
    }
  };

  return <DropdownItem {...others} type="button" label="Logout" handleClick={() => handleButtonClick()} handleClose={() => handleClose()} />;
};

export default Logout;