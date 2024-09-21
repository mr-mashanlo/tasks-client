import { FC, FormEvent } from 'react';
import { AuthResponseSchema, SignInSchema } from '@/entities/auth';
import { signIn } from './signInService';
import { useAuthStore } from '../_store';
import { Button, Input } from '@/shared/ui';

const SignInForm: FC = () => {
  const setID = useAuthStore( state => state.setID );

  function formDataToObject( formData: FormData ) {
    const fields = Object.fromEntries( formData.entries() );
    const result = SignInSchema.safeParse( fields );
    if ( !result.success ) { throw result.error; }
    return result.data;
  };

  async function handleFormSubmit( e: FormEvent<HTMLFormElement> ) {
    e.preventDefault();
    const formData = new FormData( e.currentTarget );
    try {
      const fields = formDataToObject( formData );
      const response = await signIn( fields );
      const result = AuthResponseSchema.parse( response );
      setID( result.id );
    } catch ( error ) {
      return error;
    }
  };

  return (
    <form onSubmit={e => handleFormSubmit( e )} className="flex flex-col gap-7">
      <Input id="email" label={'Email'} type="text" placeholder="one@company.com" required />
      <Input id="password" label={'Password'} type="password" placeholder="••••••••" required />
      <Button>Sign in</Button>
    </form>
  );
};

export default SignInForm;