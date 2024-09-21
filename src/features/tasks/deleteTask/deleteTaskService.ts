import { authInstance } from '@/shared/api';

export async function deleteTask( id: string ) {
  try {
    const response = await authInstance( `task/${id}`, { method: 'delete', headers: { 'content-type': 'application/json' } } );
    return await response.json();
  } catch ( error ) {
    return error;
  }
}