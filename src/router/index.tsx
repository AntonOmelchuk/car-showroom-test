import { createBrowserRouter } from 'react-router';

import { ROUTES } from '../constants/general';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import VehicleDetailPage from '../pages/VehicleDetailPage/VehicleDetailPage';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.VEHICLE_DETAILS,
        element: <VehicleDetailPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
