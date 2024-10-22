import { FC } from 'react';
import { useAuthStore } from '@/entities/auth/model';
import { logout } from '@/entities/auth/api';

const Logout: FC = () => {
  const setID = useAuthStore( state => state.setID );

  async function handleButtonClick() {
    try {
      await logout();
      setID( '' );
    } catch ( error ) {
      console.error( error );
    }
  };

  return (
    <a onClick={() => handleButtonClick()} role="button" className="block px-3 py-1 rounded hover:bg-zinc-800">Logout</a>
  );
};

export default Logout;