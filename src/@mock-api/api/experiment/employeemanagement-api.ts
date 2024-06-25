import ExtendedMockAdapter, { Params } from "@mock-api/ExtendedMockAdapter";
import mockapi from "../../mock-api.json";
import mockData from "../../MOCK_DATA.json";
import _ from "lodash";
import { User } from "src/app/auth/user";
import { never, unknown } from "zod";
import EmployeeModel from "src/app/main/experiment/employeeManagement/model/EmployeeModel";
import { PartialDeep } from "type-fest";

let roleList = mockData.roles as string[];
let statusList = mockData.status as string[];
let employees = mockapi.components.examples.auth_users
  .value as unknown as User[];

let uniqueCompanies = [] as string[];

export const employeeeManagementApi = (mock: ExtendedMockAdapter) => {
  mock.onGet("/employee-management/employees").reply(() => {
    return [200, employees];
  });
  mock.onGet("/employee-management/employees/:id").reply((config) => {
    const { id } = config.params as Params;

    const employee = _.find(employees, (el) => {
      return el.data.employeeNumber === Number(id);
    });

    return [200, employee];
  });
  mock.onPut("/employee-management/employees/:id").reply((config) => {
    const { id } = config.params as Params;
    console.log(config);
    const newData = JSON.parse(config.data as string) as User;
    _.assign(
      _.find(employees, (el) => {
        return el.data.employeeNumber === Number(id);
      }),
      newData
    );
    console.log(newData);
    return [
      200,
      _.find(employees, (el) => {
        return el.data.employeeNumber === Number(id);
      }),
    ];
  });
  mock.onPost("/employee-management/employees").reply((data) => {
    console.log(data.data);
    const newEmployee = EmployeeModel({
      uid: _.uniqueId(),
      role: "admin",
      ...JSON.parse(data.data as string),
    } as PartialDeep<User>);
    newEmployee.data.employeeNumber =
      employees[employees.length - 1].data.employeeNumber + 1;
    employees.push(newEmployee);

    return [200, newEmployee];
  });
  mock.onDelete("/employee-management/employees/:id").reply((config) => {
    const { id } = config.params as Params;

    _.remove(employees, (el) => {
      return el.data.employeeNumber === Number(id);
    });

    return [200, id];
  });

  mock.onGet("/employee-management/roles").reply(() => {
    return [200, roleList];
  });

  mock.onGet("/employee-management/onsite-companies").reply(() => {
    // const companies = employees.map((employee) => {
    //   return employee.data.onSiteInfo.siteName;
    // });
    // console.log(companies);
    // const uniqueCompanies = _.uniq(companies).filter((a) => {
    //   return a !== undefined && a != "" && a != null;
    // });
    // console.log(uniqueCompanies);
    uniqueCompanies = _.uniq(
      employees.map((employee) => {
        return employee.data.onSiteInfo.siteName;
      })
    ).filter((a) => {
      return a !== undefined && a != "" && a != null;
    });
    console.log(uniqueCompanies);
    return [200, uniqueCompanies];
  });
  mock.onGet("/employee-management/onsite-status").reply(() => {
    return [200, statusList];
  });
};
