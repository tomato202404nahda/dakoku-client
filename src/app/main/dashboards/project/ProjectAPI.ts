import { apiService as api } from "app/store/apiService";
import { WithSlice, createSelector } from "@reduxjs/toolkit";
import BudgetWidgetType from "../finance/widgets/types/BudgetWidgetType";
import BudgetDistributionDataType from "./tabs/budget/widgets/types/BudgetDistributionDataType";
import ExpensesDataType from "./tabs/budget/widgets/types/ExpensesDataType";
import BudgetDetailsDataType from "./tabs/budget/widgets/types/BudgetDetailsDataType";
import WidgetDataType from "./tabs/home/widgets/types/WidgetDataType";
import GithubIssuesDataType from "./tabs/home/widgets/types/GithubIssuesDataType";
import ScheduleDataType from "./tabs/home/widgets/types/ScheduleDataType";
import TaskDistributionDataType from "./tabs/home/widgets/types/TaskDistributionDataType";
import TeamMemberType from "./tabs/team/widgets/types/TeamMemberType";

export const tagTypes = [
  "dashboard_project_projects",
  "dashboard_project_widgets",
];

const dashboardProjectApi = api
  .enhanceEndpoints({
    addTagTypes: tagTypes,
  })
  .injectEndpoints({
    endpoints: (b) => ({
      getDashboardProjectProjects: b.query<
        GetDashboardProjectProjectsAPIResponse,
        GetDashboardProjectProjectsAPIArgs
      >({
        query: () => ({ url: "/mock-api/dashboards/projects/projects" }),
        providesTags: [tagTypes[0]],
      }),

      getDashboardProjectWidgets: b.query<
        GetProjectDashboardWidgetsApiResponse,
        GetProjectDashboardWidgetsApiArgs
      >({
        query: () => ({ url: "/mock-api/dashboards/projects/widgets" }),
        providesTags: [tagTypes[1]],
      }),
    }),
    overrideExisting: false,
  });
export type GetProjectDashboardWidgetsApiArgs = void;
export type GetProjectDashboardWidgetsApiResponse = {
  [key: string]:
    | BudgetWidgetType
    | BudgetDetailsDataType
    | BudgetDistributionDataType
    | ExpensesDataType
    | WidgetDataType
    | GithubIssuesDataType
    | ScheduleDataType
    | TaskDistributionDataType
    | TeamMemberType[];
};
export type GetDashboardProjectProjectsAPIResponse = ProjectType[];
export type GetDashboardProjectProjectsAPIArgs = void;

export type ProjectType = {
  id: number;
  name: string;
};
export default dashboardProjectApi;

export const {
  useGetDashboardProjectProjectsQuery,
  useGetDashboardProjectWidgetsQuery,
} = dashboardProjectApi;

export type ProjectDashboardApiType = {
  [dashboardProjectApi.reducerPath]: ReturnType<
    typeof dashboardProjectApi.reducer
  >;
};

/**
 * Lazy load
 * */
declare module "app/store/lazyLoadedSlices" {
  export interface LazyLoadedSlices
    extends WithSlice<typeof dashboardProjectApi> {}
}

export const selectProjectDashboardWidgets = createSelector(
  dashboardProjectApi.endpoints.getDashboardProjectWidgets.select(),
  (results) => results.data
);

export const selectWidget = <T>(id: string) =>
  createSelector(selectProjectDashboardWidgets, (widgets) => {
    return widgets?.[id] as T;
  });
