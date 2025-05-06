
import React from 'react';
import { lazy } from 'react';
// Lazy load the Dashboard component to improve performance
const Dashboard = lazy(() => import('../../storefront/pages/dashboard/Dashboard'));
const StoreLayout = lazy(() => import('../../storefront/layouts/StoreLayout'));
const storeRoutes = [
  {
    path: '/storefront',
    element: <StoreLayout />,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        element: <Dashboard />
      },
    ],
  },
];

export default storeRoutes;
