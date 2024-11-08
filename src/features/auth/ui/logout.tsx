import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { logout } from '@/entities/auth/api';
import { useAuthStore } from '@/entities/auth/model';
import { useFilterStore } from '@/entities/task/model';
import { DropdownItem } from '@/shared/ui';

interface Props {
  handleClose?: () => void
}

const Logout: FC<Props> = ( { handleClose, ...others } ) => {
  const navigate = useNavigate();
  const setID = useAuthStore( state => state.setID );
  const resetFilter = useFilterStore( state => state.reset );

  async function handleButtonClick() {
    try {
      await logout();
      setID( '' );
      resetFilter();
      navigate( '/' );
    } catch ( error ) {
      console.error( error );
    }
  };

  return <DropdownItem {...others} type="button" label="Logout" handleClick={() => handleButtonClick()} handleClose={handleClose} />;
};

export default Logout;