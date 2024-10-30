import { FC, FormEvent } from 'react';
import { HTTPError } from 'ky';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ZodError } from 'zod';

import { ErrorResponseType, ErrorZodType } from '@/entities/auth/model';
import { createTask } from '@/entities/task/api';
import { validateTaskFormData } from '@/entities/task/model/validator';
import { Form } from '@/entities/task/ui';

const CreateForm: FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation( { mutationFn: createTask, onSuccess: () => { queryClient.invalidateQueries( { queryKey: [ 'tasks' ] } ); } } );

  async function handleFormSubmit( e: FormEvent<HTMLFormElement> ) {
    e.preventDefault();
    const formData = new FormData( e.currentTarget );
    try {
      const fields = validateTaskFormData( formData );
      mutation.mutate( fields );
      navigate( '/tasks' );
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

export default CreateForm;