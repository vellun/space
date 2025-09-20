import App from "App/";
import { AllObjectsPage } from "App/pages/AllObjectsPage";
import { ObjectDetailPage } from "App/pages/ObjectDetailPage";
import { routesConfig } from "config/";
import { createHashRouter, Navigate, type RouteObject } from "react-router";

const routes: RouteObject[] = [
  {
    path: routesConfig.root.mask,
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/astro-objects" replace />,
      },
      {
        path: routesConfig.astroObjects.mask,
        element: <AllObjectsPage />,
      },
      {
        path: routesConfig.astroObjectDetail.mask,
        element: <ObjectDetailPage />,
      },
    ],
  },
];

export const router = createHashRouter(routes);
