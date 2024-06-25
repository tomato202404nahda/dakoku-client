import FusePageSimple from "@fuse/core/FusePageSimple";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { EmployeeManagementList } from "./EmployeeManagementList";
import EmployeeManagementSidebarContent from "./EmployeeManagementSidebarContent";

import { useThemeMediaQuery } from "@fuse/hooks";
import NavLinkAdapter from "@fuse/core/NavLinkAdapter";
import IconButton from "@mui/material/IconButton";
import { Outlet } from "react-router-dom";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";

const Root = styled(FusePageSimple)(({ theme }) => ({
  "& .FusePageSimple-header": {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function EmployeeManagementApp() {
  const [filter, setFilter] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const routeParams = useParams();
  const pageLayout = useRef(null);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("lg"));
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  useEffect(() => {
    setRightSidebarOpen(Boolean(routeParams.id));
  }, [routeParams]);
  return (
    <Root
      content={
        <div className='flex flex-col w-full min-h-full'>
          <EmployeeManagementList filter={filter} />
        </div>
      }
      ref={pageLayout}
      leftSidebarContent={
        <EmployeeManagementSidebarContent
          filter={filter}
          setFilter={setFilter}
        />
      }
      leftSidebarOpen={isMobile ? false : true}
      rightSidebarContent={
        <div className='flex flex-col flex-auto max-w-full w-md'>
          <IconButton
            className='absolute top-0 right-0 my-16 mx-32 z-10'
            sx={{ color: "white" }}
            component={NavLinkAdapter}
            to='/experiment/employee-management'
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
      scroll={isMobile ? "normal" : "content"}
    />
  );
}
