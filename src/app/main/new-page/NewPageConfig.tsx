import { FuseRouteConfigType } from "@fuse/utils/FuseUtils";
import { NewPage } from "./NewPage";
import i18next from "i18next";
import ar from "./i18n/ar";
import jp from "./i18n/jp";
import en from "./i18n/en";
import tr from "./i18n/tr";

i18next.addResourceBundle("en", "newPage", en);
i18next.addResourceBundle("tr", "newPage", tr);
i18next.addResourceBundle("ar", "newPage", ar);
i18next.addResourceBundle("jp", "newPage", jp);

const NewPageConfig: FuseRouteConfigType = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: true,
        },
        toolbar: {
          display: true,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  auth: null,
  routes: [
    {
      path: "newpage",
      element: <NewPage />,
    },
  ],
};

export default NewPageConfig;
