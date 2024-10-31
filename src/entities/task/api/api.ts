import { authInstance } from '@/shared/api';

import { TaskType } from '../model';

export async function fetchTasks( query?: { limit: number, skip: number } ) {
  const response = await authInstance( query ? `task/all?limit=${query.limit}&skip=${query.skip}` : 'task/all', { method: 'get', headers: { 'content-type': 'application/json' } } );
  return await response.json();
};

export async function fetchTask( id: string ) {
  const response = await authInstance( `task/${id}`, { method: 'get', headers: { 'content-type': 'application/json' } } );
  return await response.json();
};

export async function createTask( task: TaskType ) {
  const response = await authInstance( 'task/create', { method: 'post', body: JSON.stringify( task ), headers: { 'content-type': 'application/json' } } );
  return await response.json();
};

export async function updateTask( id: string, task: Partial<TaskType> ) {
  const response = await authInstance( `task/${id}`, { method: 'put', body: JSON.stringify( task ), headers: { 'content-type': 'application/json' } } );
  return await response.json();
};

export async function removeTask( id: string ) {
  const response = await authInstance( `task/${id}`, { method: 'delete', headers: { 'content-type': 'application/json' } } );
  return await response.json();
};