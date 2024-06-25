import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useGetEmployeeListQuery } from "./EmployeeManagementAPI";
import FuseLoading from "@fuse/core/FuseLoading";
import {
  DataGrid,
  GridColDef,
  GridComparatorFn,
  GridEventListener,
  GridNoRowsOverlay,
  GridOverlay,
} from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";

import { useTranslation } from "react-i18next";
import Input from "@mui/material/Input";

import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import Box from "@mui/material/Box";
import { debounce } from "lodash";
import NavLinkAdapter from "@fuse/core/NavLinkAdapter";

import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";

export function getYear(s: string) {
  const inputDate = new Date(s);
  const currentDate = new Date();
  let yearsDiff = currentDate.getFullYear() - inputDate.getFullYear();

  const monthDiff = currentDate.getMonth() - inputDate.getMonth();
  const dayDiff = currentDate.getDate() - inputDate.getDate();

  // Adjust if the current date is before the input date's anniversary in the current year
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    yearsDiff--;
  }

  return yearsDiff;
}

function NoRowsOverlay() {
  return (
    <Stack height='100%' alignItems='center' justifyContent='center'>
      No rows in DataGrid
    </Stack>
  );
}

type Props = {
  filter: string;
};
export const EmployeeManagementList = (props: Props) => {
  const { data: employees, isLoading } = useGetEmployeeListQuery();

  const firstRender = useRef(true);

  const [searchItem, setSearchItem] = useState("");
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);
  const { t } = useTranslation("Employee Management");
  const navigate = useNavigate();

  const handleRowClick: GridEventListener<"rowClick"> = (params, event) => {
    event.preventDefault();

    navigate(`/experiment/employee-management/${params.row.id}`);
  };
  useEffect(() => {
    if (employees) {
      const filtered = employees.filter((e) => {
        if (searchItem.length > 0) {
          if (
            e.data.displayName
              .toLowerCase()
              .includes(searchItem.toLowerCase()) ||
            e.data.nameKr.toLowerCase().includes(searchItem.toLowerCase()) ||
            e.data.nameJa.toLowerCase().includes(searchItem.toLowerCase()) ||
            e.data.nameFg.toLowerCase().includes(searchItem.toLowerCase()) ||
            e.data.employeeNumber.toString().includes(searchItem)
          ) {
            return e;
          }
        } else {
          return e;
        }
      });
      const b = filtered.map((e, i) => {
        return {
          uid: e.uid,
          image: { photoUrl: e.data.photoURL, name: e.data.displayName },
          id: e.data.employeeNumber,
          nameJa: { kanji: e.data.nameJa, furigana: e.data.nameFg },
          nameEn: e.data.displayName,
          nameKo: e.data.nameKr,
          role: t(e.data.workRole),
          startDate: e.data.startDate,
          exp: getYear(e.data.startDate),
        };
      });
      setRows(b);
    }
  }, [searchItem]);
  useEffect(() => {
    if (employees) {
      const filtered = employees.filter((e) => {
        if (props.filter.length === 0) {
          return e;
        } else {
          if (e.data.workRole === props.filter) {
            return e;
          } else if (e.data.onSiteInfo.onSiteStatus === props.filter) {
            return e;
          } else if (e.data.onSiteInfo.siteName === props.filter) {
            return e;
          }
        }
      });
      const b = filtered.map((e, i) => {
        return {
          uid: e.uid,
          image: { photoUrl: e.data.photoURL, name: e.data.displayName },
          id: e.data.employeeNumber,
          nameJa: { kanji: e.data.nameJa, furigana: e.data.nameFg },
          nameEn: e.data.displayName,
          nameKo: e.data.nameKr,
          role: t(e.data.workRole),
          startDate: e.data.startDate,
          exp: getYear(e.data.startDate),
        };
      });
      setRows(b);
    }
  }, [props.filter]);

  useEffect(() => {
    const columns: GridColDef[] = [
      {
        field: "image",
        headerName: "",
        width: 65,
        sortable: false,

        renderCell: (params) => {
          if (params.value.photoUrl) {
            return <Avatar src={params.value.photoUrl} />;
          } else {
            return (
              <Avatar sx={{ color: "#606060" }}>
                {params.value.name.charAt(0)}
              </Avatar>
            );
          }
          // return <Avatar src={params.value.photoURL} />;
        },
      },
      {
        field: "id",
        headerName: t("employeeNum"),
        headerAlign: "center",
        align: "center",
        width: 120,
      },
      {
        field: "nameJa",
        headerName: t("nameja"),
        width: 220,
        headerAlign: "center",

        sortable: false,
        renderCell: (params) => (
          <div className='flex flex-col gap-4 w-full px-20'>
            <p className='font-bold'>{params.value.kanji}</p>
            <p className='font-extralight text-sm'>{params.value.furigana}</p>
          </div>
        ),
      },
      {
        field: "nameEn",
        headerName: t("nameen"),
        headerAlign: "center",

        width: 180,

        // renderCell: (params) => (
        //   <div className='mx-auto text-left'>
        //     <p>{params.value}</p>
        //   </div>
        // ),
      },
      {
        field: "nameKo",
        headerName: t("namekr"),
        headerAlign: "center",
        align: "center",
        width: 110,
      },
      {
        field: "role",
        headerName: t("roles"),
        headerAlign: "center",
        align: "center",
        width: 110,
      },
      {
        field: "startDate",
        headerName: t("startDate"),
        headerAlign: "center",
        align: "center",
        width: 110,
      },
      {
        field: "exp",
        headerName: t("yoe"),
        width: 110,
        headerAlign: "center",
        align: "center",

        renderCell: (params) => (
          <>
            {params.value} {t("year")}
          </>
        ),
      },
    ];

    setCols(columns);
    if (firstRender.current) {
      setTimeout(() => {
        const b = employees.map((e, i) => {
          return {
            uid: e.uid,
            image: { photoUrl: e.data.photoURL, name: e.data.displayName },
            id: e.data.employeeNumber,
            nameJa: { kanji: e.data.nameJa, furigana: e.data.nameFg },
            nameEn: e.data.displayName,
            nameKo: e.data.nameKr,
            role: t(e.data.workRole),
            startDate: e.data.startDate,
            exp: getYear(e.data.startDate),
          };
        });
        const filtered = b.filter((e) => {
          return e !== undefined;
        });

        setRows(filtered);
      }, 2000);
      firstRender.current = false;
    } else {
      let b = employees.map((e, i) => {
        return {
          uid: e.uid,
          image: { photoUrl: e.data.photoURL, name: e.data.displayName },
          id: e.data.employeeNumber,
          nameJa: { kanji: e.data.nameJa, furigana: e.data.nameFg },
          nameEn: e.data.displayName,
          nameKo: e.data.nameKr,
          role: t(e.data.workRole),
          startDate: e.data.startDate,
          exp: getYear(e.data.startDate),
        };
      });
      const filtered = b.filter((e) => {
        return e !== undefined;
      });

      setRows(filtered);
    }
  }, [employees, t]);

  if (isLoading) {
    return <FuseLoading />;
  }

  return (
    <>
      <div className='p-24 sm:p-32 w-full border-b-1 bg-white sticky top-0 z-999'>
        <div className='flex flex-1 items-center w-[55%] mt-16 -mx-8'>
          <Box
            component={motion.div}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            className='flex flex-1 w-auto md:w-[50%]  items-center px-16 mx-8 border-1 rounded-full'
          >
            <FuseSvgIcon color='action' size={20}>
              heroicons-outline:search
            </FuseSvgIcon>

            <Input
              placeholder={t("searchbar")}
              className='flex flex-1 px-16 w-[50%] text-sm'
              disableUnderline
              // value={searchText}
              inputProps={{
                "aria-label": "Search",
              }}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const debounceChange = debounce((e) => {
                  if (e.target.value != undefined) {
                    setSearchItem(e.target.value);
                  }
                }, 500);

                debounceChange(e);
              }}
            />
          </Box>

          <div className='flex flex-row p-4 gap-4 w-[15%] justify-center text-sm mx-auto'>
            <p className='font-semibold'>{rows.length}</p>
            <span>/</span>
            <p className='flex flex-row font-semibold'>
              {employees.length} {t("unit")}
            </p>
          </div>
          <Button
            className='mx-8'
            variant='contained'
            color='secondary'
            component={NavLinkAdapter}
            to='new/edit'
          >
            <FuseSvgIcon size={20}>heroicons-outline:plus</FuseSvgIcon>
            <span className='hidden sm:flex mx-8'>{t("add")}</span>
          </Button>
        </div>
      </div>
      <div className='flex flex-row w-full'>
        <DataGrid
          columns={cols}
          rows={rows}
          slots={{
            noRowsOverlay: NoRowsOverlay,
          }}
          getRowClassName={() => {
            return "bg-white border-b-2 border-solid border-slate-200";
          }}
          onRowClick={handleRowClick}
        />
      </div>
    </>
  );
};
