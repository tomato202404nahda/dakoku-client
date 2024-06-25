import { lazy } from "react";
// import EmployeeManagementApp from "./employeeManagement/EmployeeManagementApp";

import EmployeeView from "./employeeManagement/subPage/EmployeeView";
import { EmployeeForm } from "./employeeManagement/subPage/EmployeeForm";
const EmployeeManagementApp = lazy(
  () => import("./employeeManagement/EmployeeManagementApp")
);
const ExperimentConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "experiment/employee-management",
      element: <EmployeeManagementApp />,
      children: [
        {
          path: ":id",
          element: <EmployeeView />,
        },
        {
          path: ":id/edit",
          element: <EmployeeForm />,
        },
      ],
    },
  ],
};

export default ExperimentConfig;
