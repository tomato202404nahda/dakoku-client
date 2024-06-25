import Button from "@mui/material/Button";
import NavLinkAdapter from "@fuse/core/NavLinkAdapter";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import FuseLoading from "@fuse/core/FuseLoading";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import Box from "@mui/system/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import _ from "@lodash";

import { useGetEmployeeQuery } from "../EmployeeManagementAPI";
import { SyntheticEvent } from "react-draft-wysiwyg";
import { BasicInfo } from "./tabs/BasicInfo";
import { OnSiteInfo } from "./tabs/OnSiteInfo";
/**
 * The contact view.
 */
function EmployeeView() {
  const { t } = useTranslation("Employee Management");
  const [tabValue, setTabValue] = useState(0);
  const routeParams = useParams();

  const { id: employeeNumber } = routeParams as { id: string };
  const {
    data: employee,
    isLoading,
    isError,
  } = useGetEmployeeQuery(employeeNumber, {
    skip: !employeeNumber,
  });

  const navigate = useNavigate();

  if (isLoading) {
    return <FuseLoading className='min-h-screen' />;
  }

  if (isError) {
    setTimeout(() => {
      navigate("/experiment/employee-management");
      // dispatch(showMessage({ message: "NOT FOUND" }));
      alert("Not found");
    }, 0);

    return null;
  }

  if (!employee) {
    // navigate("/experiment/employee-management");
    return null;
  }

  return (
    <>
      <Box
        className='relative w-full h-160 sm:h-192 px-32 sm:px-48'
        sx={{
          backgroundColor: "#334155",
        }}
      ></Box>
      <div className='relative flex flex-col flex-auto items-center p-24 pt-0 sm:p-48 sm:pt-0'>
        <div className='w-full max-w-3xl'>
          <div className='flex flex-auto items-end -mt-64'>
            <Avatar
              sx={{
                borderWidth: 4,
                borderStyle: "solid",
                borderColor: "background.paper",
                backgroundColor: "background.default",
                color: "text.secondary",
              }}
              className='w-128 h-128 text-64 font-bold'
              src={employee.data.photoURL}
              alt={employee.data.displayName}
            >
              {employee.data.displayName.charAt(0)}
            </Avatar>
            <div className='flex items-center ml-auto mb-4'>
              <Button
                variant='contained'
                sx={{
                  borderWidth: 2,
                  borderStyle: "solid",
                  borderColor: "background.default",
                  backgroundColor: "common.white",
                }}
                component={NavLinkAdapter}
                to='edit'
              >
                <FuseSvgIcon size={20}>
                  heroicons-outline:pencil-alt
                </FuseSvgIcon>
                <span className='mx-8'>{t("edit")}</span>
              </Button>
            </div>
          </div>

          <Typography className='mt-12 px-16 text-4xl font-bold truncate'>
            {`${employee.data.nameJa ? employee.data.nameJa : employee.data.displayName} ${employee.data.nameFg ? "(" + employee.data.nameFg + ")" : ""}`}
          </Typography>

          <Tabs
            value={tabValue}
            onChange={(e: SyntheticEvent, param: number) => {
              e.preventDefault;

              setTabValue(param);
            }}
            indicatorColor='secondary'
            textColor='secondary'
            variant='standard'
            classes={{ root: "w-full h-24 border-b-1" }}
          >
            <Tab className='h-24' label={t("basicInfo")} />
            <Tab className='h-24' label={t("onSiteInfo")} />
          </Tabs>
          <div className='p-16 md:py-24 md:px-12 max-w-full'>
            <div className={tabValue !== 0 ? "hidden" : ""}>
              <BasicInfo employee={employee} />
            </div>

            <div className={tabValue !== 1 ? "hidden" : ""}>
              <OnSiteInfo employee={employee} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeView;
