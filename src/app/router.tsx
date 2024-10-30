import { createBrowserRouter } from 'react-router-dom';

import { signInPageRoute, signUpPageRoute } from '@/pages/auth';
import { homePageRoute } from '@/pages/home';
import { createTaskPageRoute, singleTaskPageRoute, taskPageRoute, updateTaskPageRoute } from '@/pages/task';

const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        lazy: async () => {
          const { MainLayout } = await import( '@/app/mainLayout' );
          return { Component: MainLayout };
        },
        children: [ homePageRoute, taskPageRoute, singleTaskPageRoute, createTaskPageRoute, updateTaskPageRoute ]
      },
      {
        lazy: async () => {
          const { AuthLayout } = await import( '@/app/authLayout' );
          return { Component: AuthLayout };
        },
        children: [ signInPageRoute, signUpPageRoute ]
      }
    ]
  }

] );

export default router;