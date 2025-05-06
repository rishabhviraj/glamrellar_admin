import { useRoutes } from 'react-router-dom';
import adminRoutes from './admin/routes/adminRoutes';  // check the path
import storeRoutes from './storefront/routes/storeRoutes';  // check the path

const AppRoutes = () => {
  return useRoutes([...adminRoutes, ...storeRoutes]);  // spread the routes to merge them
};

export default AppRoutes;
