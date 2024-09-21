import { authInstance } from '@/shared/api';
import { TaskResponseSchema, TaskType } from '@/entities/task';

export async function createTask( body: TaskType ) {
  try {
    const response = await authInstance( 'task/create', { method: 'post', body: JSON.stringify( body ), headers: { 'content-type': 'application/json' } } );
    const tasks = TaskResponseSchema.parse( await response.json() );
    return tasks;
  } catch ( error ) {
    return error;
  }
}