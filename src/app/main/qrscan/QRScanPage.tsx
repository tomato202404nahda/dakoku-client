import { Button } from "@mui/material";

import { Link } from "react-router-dom";

import { SetStateAction, useEffect, useState } from "react";

export const QRScanPage = () => {
  const locale = "jp";
  const dateNow = new Date();
  const [now, setNow] = useState<Date>(dateNow);

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const day = now.toLocaleDateString(locale, { weekday: "long" });
  const date = `${now.toLocaleDateString(locale, { year: "numeric" })}${now.toLocaleDateString(locale, { month: "numeric" })}${now.toLocaleDateString(locale, { day: "2-digit" })}\n\n `;
  const time = now.toLocaleTimeString(locale, {
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <>
      <div className='flex flex-col flex-1 items-center  w-full p-16 md:p-24'>
        <div className='flex flex-col gap-16 w-full bg-white p-8 rounded-8'>
          <div className='flex flex-col w-full bg-grey-700 p-8 rounded-6 text-2xl text-white text-center'>
            {date} ({day.charAt(0)})<span className='text-4xl'>{time}</span>
          </div>
          <div className='flex flex-col items-center pb-8'>
            <Button
              to={`read`}
              component={Link}
              className='px-16 min-w-128'
              color='secondary'
              variant='contained'
            >
              QRコードを読み取る
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
