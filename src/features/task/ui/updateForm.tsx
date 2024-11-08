import { FC, FormEvent } from 'react';
import { HTTPError } from 'ky';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { ZodError } from 'zod';

import { ErrorResponseType, ErrorZodType } from '@/entities/auth/model';
import { fetchTask, updateTask } from '@/entities/task/api';
import { TaskResponseSchema, TaskType } from '@/entities/task/model';
import { validateTaskFormData } from '@/entities/task/model/validator';
import { Form } from '@/entities/task/ui';

const UpdateForm: FC = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const query = useQuery( { queryKey: [ 'task', id ], queryFn: () => fetchTask( id ) } );
  const queryClient = useQueryClient();
  const mutation = useMutation( { mutationFn: ( task: TaskType ) => updateTask( id, task ), onSuccess: () => { queryClient.invalidateQueries( { queryKey: [ 'tasks' ] } ); } } );
  const result = TaskResponseSchema.safeParse( query.data );

  async function handleFormSubmit( e: FormEvent<HTMLFormElement> ) {
    e.preventDefault();
    const formData = new FormData( e.currentTarget );
    try {
      const fields = validateTaskFormData( formData );
      mutation.mutate( fields );
      navigate( -1 );
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

  if ( query.isLoading ) return <p>Loading</p>;

  if ( query.isError ) return <p>Query error</p>;

  if ( !result.success ) return <p>Result error</p>;

  return <Form task={result.data} onSubmit={e => handleFormSubmit( e )} />;
};

export default UpdateForm;