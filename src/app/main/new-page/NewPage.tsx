import FusePageSimple from "@fuse/core/FusePageSimple";
import { Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import _ from "@lodash";

export const NewPage = () => {
  const { t } = useTranslation("newPage");
  const tabs = [
    {
      id: "desc",
      title: t("DESC"),
    },
    {
      id: "img",
      title: t("IMAGE"),
    },
  ];

  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  function handleSelectTab(id: string) {
    setSelectedTabId(id);
  }

  return (
    <div className='min-w-xs max-w-xl box-border relative z-0 px-28 md:px-32 pt-18 md:pt-28 block '>
      <div className='grid grid-cols-[minmax(0,1fr)] gap-x-14'>
        <div>
          <main className='grid auto-cols-auto gap-10'>
            <header className='relative flex flex-nowrap justify-end items-center drop-shadow-none'>
              <Typography className='p-0 flex-grow break-words text-18 leading-3'>
                {t("NEWPAGE")}
              </Typography>
            </header>
            <Tabs
              value={_.findIndex(tabs, { id: selectedTabId })}
              variant='fullWidth'
              className='w-full mt-24 mb-32'
              indicatorColor='secondary'
            >
              {tabs.map((item) => (
                <Tab
                  onClick={() => handleSelectTab(item.id)}
                  key={item.id}
                  className='min-w-0'
                  label={item.title}
                />
              ))}
            </Tabs>
            {selectedTabId === "desc" && <div>{t("BRUH")}</div>}
            {selectedTabId === "img" && (
              <div>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Irbis4.JPG'
                  alt=''
                />
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
