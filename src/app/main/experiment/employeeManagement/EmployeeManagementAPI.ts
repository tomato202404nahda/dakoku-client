import { apiService as api } from "app/store/apiService";
import { url } from "inspector";

import { User } from "src/app/auth/user";

export const addTagTypes = [
  "employees",
  "employee",
  "roles",
  "status",
  "companies",
] as const;

const EmployeeAPI = api.enhanceEndpoints({ addTagTypes }).injectEndpoints({
  endpoints: (build) => ({
    getEmployeeList: build.query<
      GetEmployeeListApiResponse,
      GetEmployeeListApiArgs
    >({
      query: () => ({ url: `/mock-api/employee-management/employees` }),
      providesTags: ["employees"],
    }),
    getEmployee: build.query<GetEmployeeApiResponse, GetEmployeeApiArgs>({
      query: (id) => ({ url: `/mock-api/employee-management/employees/${id}` }),
      providesTags: ["employee"],
    }),
    updateEmployee: build.mutation<
      UpdateEmployeeApiResponse,
      UpdateEmployeeApiArgs
    >({
      query: (user) => ({
        url: `/mock-api/employee-management/employees/${String(user.data.employeeNumber)}`,
        method: "PUT",
        data: user,
      }),
      invalidatesTags: ["employees", "employee", "companies"],
    }),
    createEmployee: build.mutation<
      CreateEmployeeApiResponse,
      CreateEmployeeApiArgs
    >({
      query: (arg) => ({
        url: `/mock-api/employee-management/employees`,
        method: "POST",
        data: arg.employee,
      }),
      invalidatesTags: ["employees", "companies"],
    }),
    deleteEmployee: build.mutation<
      DeleteEmployeeApiResponse,
      DeleteEmployeeApiArgs
    >({
      query: (id) => ({
        url: `/mock-api/employee-management/employees/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["employees", "employee", "companies"],
    }),
    getRolesList: build.query<GetRolesListApiResponse, GetRolesListApiArgs>({
      query: () => ({ url: `/mock-api/employee-management/roles` }),
      providesTags: ["roles"],
    }),
    getStatusList: build.query<GetStatusListApiResponse, GetStatusListApiArgs>({
      query: () => ({ url: `/mock-api/employee-management/onsite-status` }),
      providesTags: ["status"],
    }),
    getCompanyList: build.query<
      GetCompanyListApiResponse,
      GetCompanyListApiArgs
    >({
      query: () => ({ url: `/mock-api/employee-management/onsite-companies` }),
      providesTags: ["companies"],
    }),
  }),
});

export type GetEmployeeListApiResponse = /** status 200 User Found */ User[];
export type GetEmployeeListApiArgs = void;
export type GetEmployeeApiResponse = /** status 200 User Found */ User;
export type GetEmployeeApiArgs = string;
export type DeleteEmployeeApiResponse = /** status 200 User Found */ string;
export type DeleteEmployeeApiArgs = string;
export type UpdateEmployeeApiResponse = /** status 200 User Found */ User;
export type UpdateEmployeeApiArgs = User;
export type CreateEmployeeApiResponse = /** status 200 User Found */ User;
export type CreateEmployeeApiArgs = {
  employee: User;
};
export type GetRolesListApiResponse = /** status 200 User Found */ string[];
export type GetRolesListApiArgs = void;
export type GetStatusListApiResponse = /** status 200 User Found */ string[];
export type GetStatusListApiArgs = void;
export type GetCompanyListApiResponse = /** status 200 User Found */ string[];
export type GetCompanyListApiArgs = void;

export const {
  useGetEmployeeListQuery,
  useGetRolesListQuery,
  useGetEmployeeQuery,
  useGetCompanyListQuery,
  useGetStatusListQuery,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
  useCreateEmployeeMutation,
} = EmployeeAPI;
