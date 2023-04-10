import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerOpenTo() {
    return (
        <>
            <LocalizationProvider  dateAdapter={AdapterDayjs}>
                <DemoContainer sx={{ minWidth: "48%" }} components={['DatePicker', 'DatePicker']}>
                    <DatePicker sx={{width : "100%"}} label={'Date'} views={['month', 'year']} />
                </DemoContainer>
            </LocalizationProvider>
        </>
    );
}