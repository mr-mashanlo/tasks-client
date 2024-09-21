import { authInstance } from '@/shared/api';
import { TaskListResponseSchema } from '@/entities/task';

export async function fetchTasks() {
  try {
    const response = await authInstance( 'task/all', { method: 'get', headers: { 'content-type': 'application/json' } } );
    return TaskListResponseSchema.parse( await response.json() );
  } catch ( error ) {
    return error;
  }
}