import path from "path";
import { Error500 } from "./Error/500/Error500";

const PagesConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: "pages/error/500",
      element: <Error500 />,
    },
  ],
};

export default PagesConfig;
