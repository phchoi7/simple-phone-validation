import * as React from "react";
import TextField from "@mui/material/TextField";

export default function PhoneInput() {
  return (
    <TextField
      id="filled-number"
      label="Number"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      variant="filled"
    />
  );
}
