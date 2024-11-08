import { authInstance } from '@/shared/api';

import { TaskType } from '../model';

export async function fetchTasks( params: { limit: number, skip: number, query?: string, status?: string, priority?: string } ) {
  const url = new URL( 'http://test.com' );
  url.searchParams.set( 'limit', String( params.limit ) );
  url.searchParams.set( 'skip', String( params.skip ) );
  if ( params.query ) url.searchParams.set( 'query', String( params.query ) );
  if ( params.status ) url.searchParams.set( 'status', String( params.status ) );
  if ( params.priority ) url.searchParams.set( 'priority', String( params.priority ) );
  const response = await authInstance( `task/all${url.search}`, { method: 'get', headers: { 'content-type': 'application/json' } } );
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