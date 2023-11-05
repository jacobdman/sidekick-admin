import { RouteLayout } from './LayoutTypes';

export interface AppRoute {
  component: () => JSX.Element;
  exact: boolean;
  Layout?: RouteLayout;
  path: string;
  requireAuth?: boolean;
}
