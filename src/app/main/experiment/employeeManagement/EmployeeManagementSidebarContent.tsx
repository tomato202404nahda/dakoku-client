import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import FuseNavigation from "@fuse/core/FuseNavigation";
import FuseNavItemModel from "@fuse/core/FuseNavigation/models/FuseNavItemModel";
import jp from "./i18n/jp";
import en from "./i18n/en";
import i18next from "i18next";
import {
  useGetRolesListQuery,
  useGetStatusListQuery,
  useGetCompanyListQuery,
} from "./EmployeeManagementAPI";
import FuseLoading from "@fuse/core/FuseLoading";
import { Dispatch, SetStateAction, useEffect } from "react";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";

type Props = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

function EmployeeManagementSidebarContent(props: Props) {
  i18next.addResourceBundle("en", "Employee Management", en);
  i18next.addResourceBundle("jp", "Employee Management", jp);
  const { t } = useTranslation("Employee Management");
  const { data: rs, isLoading: loading1 } = useGetRolesListQuery();
  const { data: status, isLoading: loading2 } = useGetStatusListQuery();
  const { data: companies, isLoading: loading3 } = useGetCompanyListQuery();

  if (loading1 || loading2 || loading3) {
    return <FuseLoading />;
  }
  return (
    <div className='flex-auto border-l-1'>
      <div className='mb-24 mt-40 mx-24'>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
        >
          <Typography className='text-3xl font-extrabold tracking-tight leading-none'>
            {t("title")}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.1 } }}
        ></motion.div>
      </div>

      <motion.div
        className='mb-24'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
      >
        <Typography
          className='px-28 py-10 uppercase text-12 font-600'
          color='secondary.main'
        >
          {t("roles")}
        </Typography>

        <div className='px-16 py-2'>
          <div className='flex flex-col  w-full gap-4  whitespace-nowrap p-0'>
            {rs.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    if (props.filter === item) {
                      props.setFilter("");
                    } else {
                      props.setFilter(item);
                    }
                  }}
                  className={` cursor-pointer select-none flex flex-row align-middle w-full gap-16 p-12 rounded-8 ${props.filter === item ? "bg-grey-300" : ""} hover:bg-grey-200 text-grey-900 hover:text-black`}
                >
                  <FuseSvgIcon sx={{ color: "turquoise" }}>
                    material-outline:local_offer
                  </FuseSvgIcon>
                  <div className='truncate'>{t(item)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      <motion.div
        className='mb-24'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
      >
        <Typography
          className='px-28 py-10 uppercase text-12 font-600'
          color='secondary.main'
        >
          {t("status")}
        </Typography>

        <div className='px-16 py-2'>
          <div className='flex flex-col w-full gap-4  whitespace-nowrap p-0'>
            {status.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    if (props.filter === item) {
                      props.setFilter("");
                    } else {
                      props.setFilter(item);
                    }
                  }}
                  className={` cursor-pointer select-none flex flex-row align-middle w-full gap-16 p-12 rounded-8 ${props.filter === item ? "bg-grey-300" : ""} hover:bg-grey-200 text-grey-900 hover:text-black`}
                >
                  <FuseSvgIcon sx={{ color: "turquoise" }}>
                    material-outline:local_offer
                  </FuseSvgIcon>
                  <div className='truncate'>{t(item)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      <motion.div
        className='mb-24'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
      >
        <Typography
          className='px-28 py-10 uppercase text-12 font-600'
          color='secondary.main'
        >
          {t("onSite")}
        </Typography>

        <div className='px-16 py-2'>
          <div className='flex flex-col overflow-clip w-full gap-4 whitespace-nowrap p-0'>
            {companies.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    if (props.filter === item) {
                      props.setFilter("");
                    } else {
                      props.setFilter(item);
                    }
                  }}
                  className={` cursor-pointer select-none flex flex-row align-middle w-full gap-16 p-12 rounded-8 ${props.filter === item ? "bg-grey-300" : ""} hover:bg-grey-200 text-grey-900 hover:text-black`}
                >
                  <FuseSvgIcon sx={{ color: "#81D8CF" }}>
                    material-outline:local_offer
                  </FuseSvgIcon>
                  <div className='truncate'>{t(item)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default EmployeeManagementSidebarContent;
