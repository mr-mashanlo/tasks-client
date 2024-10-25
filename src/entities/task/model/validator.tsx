import { TaskListResponseSchema, TaskResponseSchema, TaskSchema } from './schema';

export function validateTaskFormData( formData: FormData ) {
  const fields = Object.fromEntries( formData.entries() );
  const result = TaskSchema.safeParse( fields );
  if ( !result.success ) {
    throw result.error;
  }
  return result.data;
};

export function validateTaskListResponse( responseData: unknown ) {
  const result = TaskListResponseSchema.safeParse( responseData );
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