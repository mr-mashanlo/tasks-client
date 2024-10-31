import { TaskResponseSchema, TaskSchema, TasksDataResponseSchema } from './schema';

export function validateTaskFormData( formData: FormData ) {
  const fields = Object.fromEntries( formData.entries() );
  const result = TaskSchema.safeParse( fields );
  if ( !result.success ) {
    throw result.error;
  }
  return result.data;
};

export function validateTasksDataResponse( responseData: unknown ) {
  const result = TasksDataResponseSchema.safeParse( responseData );
  if ( !result.success ) {
    throw result.error;
  }
  return result.data;
}

export function validateTaskResponse( responseData: unknown ) {
  const result = TaskResponseSchema.safeParse( responseData );
  if ( !result.success ) {
    throw result.error;
  }
  return result.data;
}