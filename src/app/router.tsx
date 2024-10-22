import { createBrowserRouter } from 'react-router-dom';
import { homePageRoute } from '@/pages/home';
import { taskPageRoute } from '@/pages/task';
import { signInPageRoute, signUpPageRoute } from '@/pages/auth';

const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        lazy: async () => {
          const { MainLayout } = await import( '@/app/mainLayout' );
          return { Component: MainLayout };
        },
        children: [ homePageRoute, taskPageRoute ]
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