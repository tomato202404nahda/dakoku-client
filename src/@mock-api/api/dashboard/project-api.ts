import mockApi from "../../mock-api.json";
import ExtendedMockAdapter from "@mock-api/ExtendedMockAdapter";

const widgets = mockApi.components.examples.project_dashboard_widgets.value;
const projects = mockApi.components.examples.project_dashboard_projects.value;

export const dashboardProjectAPImock = (mock: ExtendedMockAdapter) => {
  mock.onGet("/dashboards/projects/widgets").reply(() => {
    return [200, widgets];
  });
  mock.onGet("/dashboards/projects/projects").reply(() => {
    return [200, projects];
  });
};
