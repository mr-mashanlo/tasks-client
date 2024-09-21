import { FC } from 'react';
import { SignUpWidget } from '@/widgets/auth/signUp';

export const SignUpPage: FC = () => {
  return (
    <div className="w-full sm:w-96 flex flex-col gap-7">
      <SignUpWidget />
    </div>
  );
};

export default SignUpPage;