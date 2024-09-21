import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: ReactNode
}

const RequestAuth: FC<Props> = ( { children } ) => {
  const id = true;

  if ( !id ) return <Navigate to="/signin" />;

  return children;
};

export default RequestAuth;