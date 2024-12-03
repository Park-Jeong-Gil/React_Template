import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from 'react-router-dom';
import DefaultLayout from './layouts/Default';
import { navigation } from '../constants/navigations';

interface NavigationRoute {
  path?: string;
  element: React.ComponentType;
  children?: NavigationRoute[];
}

// 재귀적으로 children을 처리하기 위한 함수
function convertRoutes(routes: NavigationRoute[]): RouteObject[] {
  return routes.map(({ element, children, ...route }) => ({
    ...route,
    element: React.createElement(element),
    children: children ? convertRoutes(children) : undefined,
  }));
}

const routePages = convertRoutes(navigation);

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: routePages,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
