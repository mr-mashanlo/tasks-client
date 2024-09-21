import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: ReactNode
}

const NotRequestAuth: FC<Props> = ( { children } ) => {
  const id = true;

  if ( id ) return <Navigate to="/" />;

  return children;
};

export default NotRequestAuth;