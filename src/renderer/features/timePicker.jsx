import React from 'react';
import {DemoItem} from "@mui/x-date-pickers/internals/demo/index.js";
import {MobileTimePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

function TimePicker() {
    return (
       <div className="col-4 m-0 pe-1">
           <LocalizationProvider dateAdapter={AdapterDayjs}>
               <DemoItem label="">
                   <MobileTimePicker defaultValue={dayjs('15:30')} />
               </DemoItem>
           </LocalizationProvider>
       </div>
    );
}

export default TimePicker;