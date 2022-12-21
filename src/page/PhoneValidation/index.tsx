import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Grid, Stack, Typography } from "@mui/material";
import AreaFlagSelection from "../../components/AreaFlagSelection";
import PhoneInput from "../../components/PhoneInput";

export default function PhoneValidation() {
  const theme = useTheme();

  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid item>
        <Box
          sx={{
            width: 600,
            height: 600,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 10,
          }}
        >
          <Typography variant="h3" gutterBottom>
            Simple Phone Validator
          </Typography>
          <Typography variant="body1" gutterBottom>
            please enter the phone number
          </Typography>
          <Box>
            <Stack direction={"row"}>
              <AreaFlagSelection />
              <PhoneInput />
            </Stack>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
