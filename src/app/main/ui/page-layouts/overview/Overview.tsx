import FusePageSimple from "@fuse/core/FusePageSimple";
import { Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

const Root = styled(FusePageSimple)(({ theme }) => ({
  "& .FusePageSimple-header": {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: theme.palette.divider,
  },
  "& .FusePageSimple-content": {},
  "& .FusePageSimple-sidebarHeader": {},
  "& .FusePageSimple-sidebarContent": {},
}));
export default function Overview() {
  return (
    <Root
      header={
        <div className='flex flex-col p-24 mx-8 gap-4'>
          <div className='flex items-center font-medium'>
            <div>
              <Typography color='secondary.main'>User Interface</Typography>
            </div>
          </div>
          <div className='mt-8'>
            <Typography className='text-4xl font-extrabold leading-7 truncate'>
              Overview
            </Typography>
          </div>
        </div>
      }
      content={
        <div className='flex flex-col p-24 mx-8 gap-16 w-1/2'>
          <h4 className='text-2xl font-bold mt-16'>Introduction</h4>
          <p>
            Page layouts are set of pre-made layouts that can be used as the
            starter on any page/app design. While they provide some styling by
            default, it's very minimal and can be easily modified from the
            component you create.
          </p>
          <p>Main benefits of using page layouts are;</p>
          <ul className='list-outside list-disc mx-16'>
            <li>
              <span className='text-base font-bold my-16'>Consistency</span>
              <p>
                Your apps and pages will all look similar in terms of layout and
                general styling which essentially make them more user friendly
                and easy to learn.
              </p>
            </li>
            <li>
              <span className='text-base font-bold my-16'>
                Easy modifications
              </span>
              <p>
                In the future, if you decide to change the design of your pages,
                add elements or modify the existing ones, it can be done very
                easily since all your pages will be sharing same class names and
                the general code structure.
              </p>
            </li>
            <li>
              <span className='text-base font-bold my-16'>
                Easier learning curve for your users
              </span>
              <p>
                Making the general design and layout of your pages similar will
                make them easier to learn for your users. They won't be looking
                for a save button or a search field over and over again, trying
                to find and memorize their locations for each page since all
                pages will be sharing a similar structure.
              </p>
            </li>
          </ul>
        </div>
      }
    />
  );
}
