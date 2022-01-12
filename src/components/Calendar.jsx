import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import FormHelperText from "@mui/material/FormHelperText";

export default function MaterialUIPickers({ date, setDate }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        fullWidth
        disableFuture
        openTo="year"
        views={["year", "month", "day"]}
        value={date}
        minDate={new Date("2020-01-01")}
        maxDate={new Date("2023-01-01")}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <FormHelperText>Enter date of expense</FormHelperText>
    </LocalizationProvider>
  );
}
