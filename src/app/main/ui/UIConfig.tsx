import { lazy } from "react";

const TailwindCSS = lazy(() => import("./tailwindcss/TailwindCSS"));
const Overview = lazy(() => import("./page-layouts/overview/Overview"));

const basePath = "ui/";
const UIConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: `${basePath}tailwindcss`,
      element: <TailwindCSS />,
    },
    {
      path: `${basePath}page-layouts/overview`,
      element: <Overview />,
    },
  ],
};

export default UIConfig;
