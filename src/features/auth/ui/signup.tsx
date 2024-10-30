import { FC, FormEvent, useState } from 'react';
import { HTTPError } from 'ky';
import { ZodError } from 'zod';

import { signup } from '@/entities/auth/api';
import { ErrorResponseType, ErrorZodType, useAuthStore, validateAuthResponse, validateSignUpFormData } from '@/entities/auth/model';
import { Button, Input } from '@/shared/ui';

const SignUpForm: FC = () => {
  const setID = useAuthStore( state => state.setID );
  const [ error, setError ] = useState( { path: '', msg: '' } );

  async function handleFormSubmit( e: FormEvent<HTMLFormElement> ) {
    e.preventDefault();
    const formData = new FormData( e.currentTarget );
    try {
      const fields = validateSignUpFormData( formData );
      const response = await signup( fields.email, fields.password, fields.confirm );
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
      <Input display="framed" name="confirm" label={'Confirm password'} varning={error.path === 'confirm' ? error.msg : ''} type="password" placeholder="••••••••" required />
      <Button display="bordered" theme="white">Sign up</Button>
    </form>
  );
};

export default SignUpForm;