import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { User } from "src/app/auth/user";
import { useTranslation } from "react-i18next";
export type Props = {
  employee: User;
};
export const OnSiteInfo = (props: Props) => {
  const { t } = useTranslation("Employee Management");
  return (
    <div className='flex flex-col space-y-32 justify-start'>
      <div className='flex items-start'>
        <FuseSvgIcon>heroicons-outline:bar-3-bottom-left</FuseSvgIcon>
        <div className='flex flex-row w-full ml-24 leading-6'>
          <div className='w-[45%]'>{t("site")} </div>
          <div>{props.employee.data.onSiteInfo.siteName} </div>
        </div>
      </div>
      <div className='flex items-start'>
        <FuseSvgIcon>heroicons-outline:bar-3-bottom-left</FuseSvgIcon>
        <div className='flex flex-row w-full ml-24 leading-6'>
          <div className='w-[45%]'>{t("status")} </div>
          <div>{t(props.employee.data.onSiteInfo.onSiteStatus)} </div>
        </div>
      </div>
    </div>
  );
};
