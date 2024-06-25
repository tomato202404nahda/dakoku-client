import FuseUtils from "@fuse/utils";
import FuseLoading from "@fuse/core/FuseLoading";
import { Navigate } from "react-router-dom";
import settingsConfig from "app/configs/settingsConfig";
import { FuseRouteConfigsType, FuseRoutesType } from "@fuse/utils/FuseUtils";
import SignInConfig from "../main/sign-in/SignInConfig";
import SignUpConfig from "../main/sign-up/SignUpConfig";
import SignOutConfig from "../main/sign-out/SignOutConfig";
import Error404Page from "../main/404/Error404Page";
import ExampleConfig from "../main/example/ExampleConfig";
import NewPageConfig from "../main/new-page/NewPageConfig";
import PagesConfig from "../main/pages/PagesConfig";
import UIConfig from "../main/ui/UIConfig";
import DashboardsConfig from "../main/dashboards/DashboardsConfig";
import ExperimentConfig from "../main/experiment/ExperimentConfig";
import QRScanConfig from "../main/qrscan/QRScanConfig";

const routeConfigs: FuseRouteConfigsType = [
  ExampleConfig,
  NewPageConfig,
  SignOutConfig,
  SignInConfig,
  SignUpConfig,
  PagesConfig,
  UIConfig,
  DashboardsConfig,
  ExperimentConfig,
  QRScanConfig,
];

/**
 * The routes of the application.
 */
const routes: FuseRoutesType = [
  ...FuseUtils.generateRoutesFromConfigs(
    routeConfigs,
    settingsConfig.defaultAuth
  ),
  {
    path: "/",
    element: <Navigate to='/experiment/employee-management' />,
    auth: settingsConfig.defaultAuth,
  },

  {
    path: "loading",
    element: <FuseLoading />,
  },

  {
    path: "404",
    element: <Error404Page />,
  },
  {
    path: "*",
    element: <Navigate to='404' />,
  },
];

export default routes;
