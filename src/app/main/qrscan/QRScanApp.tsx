import FusePageSimple from "@fuse/core/FusePageSimple";
import { styled } from "@mui/material/styles";
import { QRScanPage } from "./QRScanPage";
import { Outlet, useLocation } from "react-router-dom";
// import { useParams } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import NavLinkAdapter from "@fuse/core/NavLinkAdapter";
import { useEffect, useState, useRef } from "react";

const Root = styled(FusePageSimple)(({ theme }) => ({
  "& .FusePageSimple-header": {
    backgroundColor: theme.palette.background.paper,
  },
}));

export const QRScanApp = () => {
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  const location = useLocation();
  const pageLayout = useRef(null);

  useEffect(() => {
    if (location) {
      let tmp = location.pathname.slice(
        location.pathname.lastIndexOf("/"),
        location.pathname.length
      );
      tmp === "/read" ? setRightSidebarOpen(true) : setRightSidebarOpen(false);
      console.log(tmp);
    }
  }, [location]);
  return (
    <Root
      content={<QRScanPage />}
      ref={pageLayout}
      rightSidebarContent={
        <div className='flex flex-col flex-auto max-w-full w-md'>
          <IconButton
            className='absolute top-0 right-0 my-16 mx-32 z-10'
            sx={{ color: "white" }}
            component={NavLinkAdapter}
            to='/scanqr'
            size='large'
          >
            <FuseSvgIcon>heroicons-outline:x</FuseSvgIcon>
          </IconButton>
          <Outlet />
        </div>
      }
      rightSidebarOpen={rightSidebarOpen}
      rightSidebarOnClose={() => setRightSidebarOpen(false)}
      rightSidebarWidth={640}
      rightSidebarVariant='temporary'
    />
  );
};
