import { LoaderFunctionArgs, redirect, RouteObject } from 'react-router-dom';
import { useAuthStore } from '@/entities/auth/model';

const taskPageLoader = ( args: LoaderFunctionArgs ) => {
  if ( !useAuthStore.getState().id ) { return redirect( '/' ); }
  return args;
};

export const taskPageRoute: RouteObject = {
  path: '/task',
  lazy: async () => {
    const { TaskPage } = await import( './taskPage' );
    return { Component: TaskPage };
  },
  loader: taskPageLoader
};

export const singleTaskPageRoute: RouteObject = {
  path: '/task/:id',
  lazy: async () => {
    const { SingleTaskPage } = await import( './singleTaskPage' );
    return { Component: SingleTaskPage };
  },
  loader: taskPageLoader
};