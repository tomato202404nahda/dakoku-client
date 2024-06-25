import { useParams, useNavigate } from "react-router-dom";
import {
  useGetEmployeeQuery,
  useDeleteEmployeeMutation,
  useUpdateEmployeeMutation,
  useGetRolesListQuery,
  useGetStatusListQuery,
  useCreateEmployeeMutation,
} from "../EmployeeManagementAPI";
import React, { MouseEventHandler, useEffect } from "react";
import Box from "@mui/system/Box";
import FuseLoading from "@fuse/core/FuseLoading";
import { User } from "src/app/auth/user";
import { z } from "zod";
import { mode } from "crypto-js";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import EmployeeModel from "../model/EmployeeModel";
import Button from "@mui/material/Button";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import IconButton from "@mui/material/IconButton";
import {
  Autocomplete,
  Avatar,
  Checkbox,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const kanjiRegex = /^[A-Z\u4E00-\u9FFF\s\u3000\xA0]+$/;

const kanaRegex = /^[\u3040-\u30FF\uFF66-\uFF9D]+$/;
const hangulRegex = /^[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]+$/;
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
type FormType = User;

const dataSchema = z.object({
  displayName: z.string().min(1, { message: "Name(En) is required" }),
  workRole: z.string().optional(),
  nameJa: z
    .string()
    .refine(
      (value) => {
        if (value === "") {
          return true;
        }
        return kanjiRegex.test(value);
      },
      {
        message:
          "String must contain only Kanji characters or capital alphabets",
      }
    )
    .optional(),
  nameFg: z
    .string()
    .refine(
      (value) => {
        if (value === "") {
          return true;
        }
        return kanaRegex.test(value);
      },
      {
        message: "String must contain only kana characters",
      }
    )
    .optional(),
  nameKr: z
    .string()
    .refine(
      (value) => {
        if (value === "") {
          return true;
        }
        return hangulRegex.test(value);
      },
      {
        message: "String must contain only hangul",
      }
    )
    .optional(),
  photoURL: z.string().optional(),
  email: z.string().email().min(1, { message: "Email is required" }),
  startDate: z.string().refine(
    (value) => {
      if (!dateRegex.test(value)) {
        return false;
      }
      const [year, month, day] = value.split("-").map(Number);
      const date = new Date(year, month - 1, day);
      return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
      );
    },
    {
      message: "Date must be in YYYY-MM-DD format",
    }
  ),
  onSiteInfo: z
    .object({
      onSiteStatus: z.string().optional(),
      siteName: z.string().optional(),
    })
    .optional(),
});
const schema = z.object({
  data: dataSchema,
});

export const EmployeeForm = () => {
  const { t } = useTranslation("Employee Management");
  const routeParams = useParams();
  const navigate = useNavigate();
  const { id: employeeNumber } = routeParams as { id: string };

  if (
    employeeNumber.length === 0 ||
    employeeNumber === "undefined" ||
    employeeNumber === undefined
  ) {
    navigate("/experiment/employee-management");
  }
  const {
    data: employee,

    isError,
  } = useGetEmployeeQuery(employeeNumber, {
    skip: !employeeNumber,
  });
  function startDate(): React.ReactNode {
    return <>{t("startDate")}</>;
  }
  const [updateEmployee] = useUpdateEmployeeMutation();
  const [deleteEmployee] = useDeleteEmployeeMutation();
  const [createEmployee] = useCreateEmployeeMutation();

  const { data: rs } = useGetRolesListQuery();
  const { data: status } = useGetStatusListQuery();

  const { control, watch, reset, handleSubmit, formState } = useForm<FormType>({
    mode: "all",
    resolver: zodResolver(schema),
  });
  const { isValid, dirtyFields, errors } = formState;
  const form = watch();

  useEffect(() => {
    if (employeeNumber === "new") {
      reset(EmployeeModel({ data: {} }));
    } else {
      reset({ ...employee });
    }
  }, [employee, reset, routeParams]);

  function onSubmit(data: User) {
    if (employeeNumber === "new") {
      createEmployee({ employee: data })
        .unwrap()
        .then((action) => {
          navigate(
            `/experiment/employee-management/${action.data.employeeNumber}`
          );
        });
    } else {
      data.data.employeeNumber = Number(employeeNumber);
      updateEmployee(data);
    }

    navigate("/experiment/employee-management");
  }

  const handleDelete = (employeeNumber: string) => {
    deleteEmployee(employeeNumber);
    navigate("/experiment/employee-management");
  };

  const email = watch("data.email");
  const displayName = watch("data.displayName");
  const onSiteStatus = watch("data.onSiteInfo.onSiteStatus");

  if (isError) {
    setTimeout(() => {
      navigate("/experiment/employee-management");
      // dispatch(showMessage({ message: "NOT FOUND" }));
      alert("Not found");
    }, 0);

    return null;
  }

  if (_.isEmpty(form)) {
    return <FuseLoading className='min-h-screen' />;
  }

  return (
    <>
      <Box
        className='relative w-full h-160 sm:h-192 px-32 sm:px-48'
        sx={{
          backgroundColor: "#334155",
        }}
      ></Box>
      <div className='relative flex flex-col flex-auto items-center px-24 sm:px-48'>
        <div className='w-full'>
          <div className='flex flex-auto items-end -mt-64'>
            <Controller
              control={control}
              name='data.photoURL'
              render={({ field: { onChange, value } }) => (
                <Box
                  sx={{
                    borderWidth: 4,
                    borderStyle: "solid",
                    borderColor: "background.paper",
                  }}
                  className='relative flex items-center justify-center w-128 h-128 rounded-full overflow-hidden'
                >
                  <div className='absolute inset-0 bg-black bg-opacity-50 z-10' />
                  <div className='absolute inset-0 flex items-center justify-center z-20'>
                    <div>
                      <label
                        htmlFor='button-avatar'
                        className='flex p-8 cursor-pointer'
                      >
                        <input
                          accept='image/*'
                          className='hidden'
                          id='button-avatar'
                          type='file'
                          onChange={async (e) => {
                            function readFileAsync() {
                              return new Promise((resolve, reject) => {
                                const file = e?.target?.files?.[0];

                                if (!file) {
                                  return;
                                }

                                const reader: FileReader = new FileReader();

                                reader.onload = () => {
                                  if (typeof reader.result === "string") {
                                    resolve(
                                      `data:${file.type};base64,${btoa(
                                        reader.result
                                      )}`
                                    );
                                  } else {
                                    reject(
                                      new Error(
                                        "File reading did not result in a string."
                                      )
                                    );
                                  }
                                };

                                reader.onerror = reject;

                                reader.readAsBinaryString(file);
                              });
                            }

                            const newImage = await readFileAsync();

                            onChange(newImage);
                          }}
                        />
                        <FuseSvgIcon className='text-white'>
                          heroicons-outline:camera
                        </FuseSvgIcon>
                      </label>
                    </div>
                    <div>
                      <IconButton
                        onClick={() => {
                          onChange("");
                        }}
                      >
                        <FuseSvgIcon className='text-white'>
                          heroicons-solid:trash
                        </FuseSvgIcon>
                      </IconButton>
                    </div>
                  </div>
                  <Avatar
                    sx={{
                      backgroundColor: "background.default",
                      color: "text.secondary",
                    }}
                    className='object-cover w-full h-full text-64 font-bold'
                    src={value}
                    alt={displayName}
                  >
                    {displayName?.charAt(0)}
                  </Avatar>
                </Box>
              )}
            />
          </div>
        </div>
        <Controller
          control={control}
          name='data.displayName'
          render={({ field }) => (
            <TextField
              className='mt-32'
              {...field}
              label={t("nameen")}
              placeholder={t("nameen")}
              id='nameen'
              error={!!errors.data?.displayName}
              helperText={errors?.data?.displayName?.message}
              variant='outlined'
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <FuseSvgIcon size={20}>
                      heroicons-solid:identification
                    </FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Controller
          control={control}
          name='data.workRole'
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              id='workRole'
              className='mt-32'
              options={rs || []}
              getOptionLabel={(option) => t(option)}
              renderOption={(_props, option, { selected }) => (
                <li {..._props}>
                  <Checkbox style={{ marginRight: 8 }} checked={selected} />
                  {t(option)}
                </li>
              )}
              value={value ? value : ""}
              onChange={(_, newValue) => {
                onChange(newValue); // Update form state with the new value
              }}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={t("roles")}
                  placeholder={t("roles")}
                />
              )}
            />
          )}
        />
        <Controller
          control={control}
          name='data.email'
          render={({ field }) => (
            <TextField
              className='mt-32'
              {...field}
              label={t("E-Mail")}
              placeholder={t("E-Mail")}
              id='email'
              error={!!errors.data?.email}
              helperText={errors?.data?.email?.message}
              variant='outlined'
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <FuseSvgIcon size={20}>material-solid:email</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Controller
          control={control}
          name='data.nameJa'
          render={({ field }) => (
            <TextField
              className='mt-32'
              {...field}
              label={t("nameja1")}
              placeholder={t("nameja1")}
              id='nameja'
              error={!!errors.data?.nameJa}
              helperText={errors?.data?.nameJa?.message}
              variant='outlined'
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <FuseSvgIcon size={20}>
                      heroicons-solid:user-circle
                    </FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Controller
          control={control}
          name='data.nameFg'
          render={({ field }) => (
            <TextField
              className='mt-32'
              {...field}
              label={t("nameja2")}
              placeholder={t("nameja2")}
              id='namefg'
              error={!!errors.data?.nameFg}
              helperText={errors?.data?.nameFg?.message}
              variant='outlined'
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <FuseSvgIcon size={20}>
                      heroicons-solid:user-circle
                    </FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Controller
          control={control}
          name='data.nameKr'
          render={({ field }) => (
            <TextField
              className='mt-32'
              {...field}
              label={t("namekr")}
              placeholder={t("namekr")}
              id='namekr'
              error={!!errors.data?.nameKr}
              helperText={errors?.data?.nameKr?.message}
              variant='outlined'
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <FuseSvgIcon size={20}>
                      heroicons-solid:user-circle
                    </FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        {/* <Controller
          control={control}
          name='data.startDate'
          render={({ field }) => (
            <TextField
              className='mt-32'
              {...field}
              label={t("startDate")}
              placeholder={t("startDate")}
              id='startDate'
              error={!!errors.data?.startDate}
              helperText={errors?.data?.startDate?.message}
              variant='outlined'
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <FuseSvgIcon size={20}>
                      heroicons-solid:calendar
                    </FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
          )}
        /> */}
        <Controller
          control={control}
          name='data.startDate'
          render={({ field: { value, onChange } }) => (
            <DatePicker
              value={new Date(value)}
              onChange={(val) => {
                let d = val;
                let month = "" + (d.getMonth() + 1);
                let day = "" + d.getDate();
                let year = d.getFullYear();

                if (month.length < 2) month = "0" + month;
                if (day.length < 2) day = "0" + day;

                let date = [year, month, day].join("-");
                onChange(date?.toString());
              }}
              className='mt-32 mb-16 w-full'
              slotProps={{
                textField: {
                  id: "startDate",
                  label: t("startDate"),
                  InputLabelProps: {
                    shrink: true,
                  },
                  fullWidth: true,
                  variant: "outlined",
                  error: !!errors.data?.startDate,
                  helperText: errors?.data?.startDate?.message,
                },
                actionBar: {
                  actions: ["clear", "today"],
                },
              }}
              slots={{
                openPickerIcon: () => {
                  return (
                    <FuseSvgIcon size={20}>
                      heroicons-solid:calendar
                    </FuseSvgIcon>
                  );
                },
              }}
            />
          )}
        />

        <Controller
          control={control}
          name='data.onSiteInfo.onSiteStatus'
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              id='onSiteStatus'
              className='mt-32'
              options={[...status, " "] || []}
              getOptionLabel={(option) => t(option)}
              renderOption={(_props, option, { selected }) => (
                <li {..._props}>
                  <Checkbox style={{ marginRight: 8 }} checked={selected} />
                  {t(option)}
                </li>
              )}
              value={value ? value : ""}
              onChange={(_, newValue) => {
                onChange(newValue); // Update form state with the new value
              }}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={t("status")}
                  placeholder={t("status")}
                />
              )}
            />
          )}
        />

        {onSiteStatus === "onSite" ? (
          <Controller
            control={control}
            name='data.onSiteInfo.siteName'
            render={({ field }) => (
              <TextField
                className='mt-32'
                {...field}
                label={t("site")}
                placeholder={t("site")}
                id='nameja'
                error={!!errors.data?.onSiteInfo?.siteName}
                helperText={errors?.data?.onSiteInfo?.siteName?.message}
                variant='outlined'
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <FuseSvgIcon size={20}>
                        heroicons-solid:user-circle
                      </FuseSvgIcon>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        ) : (
          <></>
        )}
      </div>

      <Box
        className='flex items-center mt-40 py-14 pr-16 pl-4 sm:pr-48 sm:pl-36 border-t'
        sx={{ backgroundColor: "background.default" }}
      >
        {employeeNumber !== "new" && (
          <Button color='error' onClick={() => handleDelete(employeeNumber)}>
            {t("delete")}
          </Button>
        )}
        <Button
          color='warning'
          className='ml-auto'
          onClick={() => history.back()}
        >
          {t("cancel")}
        </Button>
        <Button
          className='ml-8 text-gray-100 bg-blue-600 hover:bg-black hover:scale-110 transition-all duration-300 ease-in-out'
          variant='contained'
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
        >
          {t("save")}
        </Button>
      </Box>
    </>
  );
};
