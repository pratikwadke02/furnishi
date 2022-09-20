import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const Date = (props) => {

    const {label} = props
  
  const [value, setValue] = useState((new window.Date()));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
      disableFuture
      label={label}
      openTo="year"
      views={["year", "month", "day"]}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} fullWidth />}
    />
    </LocalizationProvider>
  );
};

export default Date;
