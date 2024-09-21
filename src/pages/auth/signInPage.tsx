import { FC } from 'react';
import { SignInWidget } from '@/widgets/auth/signIn';
import { useAuthStore } from '@/features/auth/_store';
import { Navigate } from 'react-router-dom';

export const SignInPage: FC = () => {
  const id = useAuthStore( state => state.id );

  if ( id ) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-full sm:w-96 flex flex-col gap-7">
      <SignInWidget />
    </div>
  );
};

export default SignInPage;