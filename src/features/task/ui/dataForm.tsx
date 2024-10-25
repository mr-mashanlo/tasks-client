import { FC, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { HTTPError } from 'ky';
import { ZodError } from 'zod';
import { Form } from '@/entities/task/ui';
import { validateTaskFormData } from '@/entities/task/model/validator';
import { createTask } from '@/entities/task/api';
import { ErrorResponseType, ErrorZodType } from '@/entities/auth/model';

const DataForm: FC = () => {
  const navigate = useNavigate();

  async function handleFormSubmit( e: FormEvent<HTMLFormElement> ) {
    e.preventDefault();
    const formData = new FormData( e.currentTarget );
    try {
      const fields = validateTaskFormData( formData );
      await createTask( fields );
      navigate( '/' );
    } catch ( error ) {
      if ( error instanceof HTTPError ) {
        const errorResponse: ErrorResponseType = await error.response.json();
        console.error( errorResponse );
      } else if ( error instanceof ZodError ) {
        const errorResponse: ErrorZodType = JSON.parse( error.message );
        console.error( errorResponse );
      } else {
        console.error( error );
      }
    }
  };

  return <Form onSubmit={e => handleFormSubmit( e )} />;
};

export default DataForm;