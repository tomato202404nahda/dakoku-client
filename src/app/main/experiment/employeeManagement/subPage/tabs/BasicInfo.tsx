import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { User } from "src/app/auth/user";
import { useTranslation } from "react-i18next";
import { getYear } from "../../EmployeeManagementList";

export type Props = {
  employee: User;
};

export const BasicInfo = (props: Props) => {
  const { t } = useTranslation("Employee Management");

  return (
    <div className='flex flex-col space-y-32 justify-start'>
      <div className='flex items-start'>
        <FuseSvgIcon>heroicons-outline:namecard</FuseSvgIcon>
        <div className='flex flex-row w-full ml-24 leading-6'>
          <div className='w-[45%]'>{t("employeeNum")} </div>
          <div>{props.employee.data.employeeNumber} </div>
        </div>
      </div>
      <div className='flex items-start'>
        <FuseSvgIcon>heroicons-outline:namecard</FuseSvgIcon>
        <div className='flex flex-row w-full ml-24 leading-6'>
          <div className='w-[45%]'>E-Mail </div>
          <div>{props.employee.data.email} </div>
        </div>
      </div>
      <div className='flex items-start'>
        <FuseSvgIcon>heroicons-outline:namecard</FuseSvgIcon>
        <div className='flex flex-row w-full ml-24 leading-6'>
          <div className='w-[45%]'>{t("name")}</div>
          <div>
            {props.employee.data.displayName}{" "}
            <span className='font-semibold'>
              {`${props.employee.data.nameKr ? "(" + props.employee.data.nameKr + ")" : ""}`}{" "}
            </span>
          </div>
        </div>
      </div>
      <div className='flex items-start'>
        <FuseSvgIcon>heroicons-outline:briefcase</FuseSvgIcon>
        <div className='flex flex-row w-full ml-24 leading-6'>
          <div className='w-[45%]'>{t("roles")}</div>
          <div>{t(props.employee.data.workRole)} </div>
        </div>
      </div>
      <div className='flex items-start'>
        <FuseSvgIcon>heroicons-outline:office-building</FuseSvgIcon>
        <div className='flex flex-row w-full ml-24 leading-6'>
          <div className='w-[45%]'>{t("startDate")}</div>
          <div>
            {props.employee.data.startDate}{" "}
            <span className='font-medium'>
              ({t("yoe")}: {getYear(props.employee.data.startDate)})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
