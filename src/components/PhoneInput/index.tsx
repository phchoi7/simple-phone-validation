import * as React from "react";
import TextField from "@mui/material/TextField";

export default function PhoneInput(props: { setSelectNumber: any }) {
  const { setSelectNumber } = props;
  const changeHandler = (value: string) => {
    setSelectNumber(value);
  };
  return (
    <TextField
      id="filled-number"
      label="Number"
      type="number"
      sx={{ width: { md: 200, xs: "100%" }, maxWidth: { md: 200, xs: "100%" } }}
      onChange={(e) => changeHandler(e.target.value)}
      InputLabelProps={{
        shrink: true,
      }}
      variant="filled"
    />
  );
}
