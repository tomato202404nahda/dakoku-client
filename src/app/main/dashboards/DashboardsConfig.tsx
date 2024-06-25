import { lazy } from "react";

const basePath = "dashboard/";

const Project = lazy(() => import("./project/Project"));
const DashboardsConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: `${basePath}project`,
      element: <Project />,
    },
  ],
};

export default DashboardsConfig;
