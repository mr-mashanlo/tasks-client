import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { logout } from '@/entities/auth/api';
import { useAuthStore } from '@/entities/auth/model';
import { DropdownItem } from '@/shared/ui';

interface Props {
  handleClose?: () => void
}

const Logout: FC<Props> = ( { handleClose, ...others } ) => {
  const navigate = useNavigate();
  const setID = useAuthStore( state => state.setID );

  async function handleButtonClick() {
    try {
      await logout();
      setID( '' );
      navigate( '/' );
    } catch ( error ) {
      console.error( error );
    }
  };

  return <DropdownItem {...others} type="button" label="Logout" handleClick={() => handleButtonClick()} handleClose={handleClose} />;
};

export default Logout;