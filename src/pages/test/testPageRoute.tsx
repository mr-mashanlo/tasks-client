import { RouteObject } from 'react-router-dom';

export const testPageRoute: RouteObject = {
  path: '/test',
  lazy: async () => {
    const { TestPage } = await import( './testPage' );
    return { Component: TestPage };
  }
};