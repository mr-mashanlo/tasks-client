import { authInstance } from '@/shared/api';
import { TaskResponseSchema, TaskResponseType } from '@/entities/task';

export async function updateTask( body: Partial<TaskResponseType> ) {
  try {
    const response = await authInstance( `task/${body._id}`, { method: 'put', body: JSON.stringify( body ), headers: { 'content-type': 'application/json' } } );
    const tasks = TaskResponseSchema.parse( await response.json() );
    return tasks;
  } catch ( error ) {
    return error;
  }
}