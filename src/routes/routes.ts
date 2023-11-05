// TYPES
import { AppRoute } from 'types/lib/RoutesTypes';
// LAYOUTS
import DefaultLayout from 'layouts/DefaultLayout';
// VIEWS
import CompanyManagement from 'components/CompanyManagement';

const routes: AppRoute[] = [
  {
    path: '/',
    component: CompanyManagement,
    exact: true,
    Layout: DefaultLayout,
  },
];

export default routes;
