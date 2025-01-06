import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Navigate,
} from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import { navigation } from '../constants/navigations';

interface NavigationRoute {
  path: string;
  element: React.ComponentType;
  children?: NavigationRoute[];
}

// 재귀적으로 children을 처리하기 위한 함수
function convertRoutes(routes: NavigationRoute[]): RouteObject[] {
  return routes.map(({ element, children, ...route }) => {
    const routeObject: RouteObject = {
      ...route,
      element: React.createElement(element),
    };

    // 하위 경로가 있으면 첫 번째 경로로 리다이렉트
    if (children) {
      routeObject.children = convertRoutes(children);

      if (children[0]?.path) {
        routeObject.children.unshift({
          element: <Navigate to={children[0].path} />,
        });
      }
    }

    return routeObject;
  });
}

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: convertRoutes(navigation),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
