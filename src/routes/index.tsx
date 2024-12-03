import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultLayout from './layouts/Default';
import { navigations } from '../constants/navigations';

// page list
import Main from './pages/Main';
import About from './pages/About/About';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: navigations.main.path,
        element: <Main />,
      },
      {
        path: navigations.about.path,
        element: <About />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
