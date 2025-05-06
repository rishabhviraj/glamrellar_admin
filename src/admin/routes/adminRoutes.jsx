import React from 'react';
import { lazy } from 'react';
// Lazy load the Dashboard component to improve performance
const Dashboard = lazy(() => import('../../admin/views/dashboard/Dashboard'));
const AdminLayout = lazy(() => import('../../admin/layouts/AdminLayout'));
const adminRoutes = [
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        element: <Dashboard />
      },
    ],
  },
];

export default adminRoutes;
