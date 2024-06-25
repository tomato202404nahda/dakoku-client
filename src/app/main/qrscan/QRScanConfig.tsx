import { FuseRouteConfigType } from "@fuse/utils/FuseUtils";

import { QRScanApp } from "./QRScanApp";
import QRReader from "./QRReader";

const QRScanConfig: FuseRouteConfigType = {
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
      path: "/scanqr",
      element: <QRScanApp />,
      children: [
        {
          path: "read",
          element: <QRReader />,
        },
      ],
    },
  ],
};

export default QRScanConfig;
