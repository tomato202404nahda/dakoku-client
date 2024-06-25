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
export default function TailwindCSS() {
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
              TailwindCSS
            </Typography>
          </div>
        </div>
      }
      content={
        <div className='flex flex-col p-24 mx-8 gap-16'>
          <p>
            As per the official page of Tailwind CSS, it is a highly
            customizable, low-level CSS framework that gives you all of the
            building blocks you need to build bespoke designs without any
            annoying opinionated styles you have to fight to override.
          </p>
          <p>
            To simply put, Tailwind provides helper classes for almost every CSS
            rule available. Fuse includes and uses Tailwind by default and it
            can be used in any part of the theme.
          </p>
          <h4 className='text-2xl font-bold mt-16'>Styling in Material-UI</h4>
          <p>
            Fuse React developed based on Material-UI as ui library.
            <a
              className='mx-4'
              href='https://mui.com/system/basics/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Material-UI's styling solution
            </a>
            uses emotion at its core. Therefore the Fuse React supports
            <a
              className='mx-4'
              href='https://mui.com/system/basics/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Emotion
            </a>
            (Emotion is a library designed for writing css styles with
            JavaScript)
          </p>
          <h4 className='text-2xl font-bold mt-16'>
            Helper Classes with TailwindCSS
          </h4>
          <p>
            We are accepting JSS advantages but we can't leave{" "}
            <strong>helper classes</strong> for fast development, ease of use,
            globally access etc. So we have used both in components.
          </p>
          <p>
            We are using
            <a
              className='mx-4'
              href='tailwindcss.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              TailwindCSS
            </a>
            as an engine for generating helper classes. It's not an UI kit and
            it's customizable. You can find the config file of Tailwind with
            named <strong>"tailwind.js"</strong> under the root of Fuse React.
          </p>
          <h4 className='text-2xl font-bold mt-16'>Official docs</h4>
          <p>
            Official Tailwind CSS documentation:{" "}
            <a
              className='mx-4'
              href='https://tailwindcss.com/docs'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://tailwindcss.com
            </a>{" "}
          </p>
        </div>
      }
    />
  );
}
