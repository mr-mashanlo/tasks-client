import { FC, FormEvent, useState } from 'react';
import { HTTPError } from 'ky';
import { ZodError } from 'zod';
import { signin } from '@/entities/auth/api';
import { ErrorResponseType, ErrorZodType, useAuthStore, validateAuthResponse, validateSignInFormData } from '@/entities/auth/model';
import { Button, Input } from '@/shared/ui';

const SignInForm: FC = () => {
  const setID = useAuthStore( state => state.setID );
  const [ error, setError ] = useState( { path: '', msg: '' } );

  async function handleFormSubmit( e: FormEvent<HTMLFormElement> ) {
    e.preventDefault();
    const formData = new FormData( e.currentTarget );
    try {
      const fields = validateSignInFormData( formData );
      const response = await signin( fields.email, fields.password );
      const result = validateAuthResponse( response );
      setID( result.id );
    } catch ( error ) {
      if ( error instanceof HTTPError ) {
        const errorResponse: ErrorResponseType = await error.response.json();
        setError( errorResponse.errors[0] );
      } else if ( error instanceof ZodError ) {
        const errorResponse: ErrorZodType = JSON.parse( error.message );
        setError( { path: errorResponse[0].validation, msg: errorResponse[0].message } );
      } else {
        console.error( error );
      }
    }
  };

  return (
    <form onSubmit={e => handleFormSubmit( e )} className="flex flex-col gap-7">
      <Input display="framed" name="email" label={'Email'} varning={error.path === 'email' ? error.msg : ''} type="text" placeholder="one@company.com" required />
      <Input display="framed" name="password" label={'Password'} varning={error.path === 'password' ? error.msg : ''} type="password" placeholder="••••••••" required />
      <Button>Sign in</Button>
    </form>
  );
};

export default SignInForm;