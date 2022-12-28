import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Button, Grid, Stack, Typography } from "@mui/material";
import AreaFlagSelection from "../../components/AreaFlagSelection";
import PhoneInput from "../../components/PhoneInput";
import { useState } from "react";
import { checkNumber } from "../../actions/apiFetch";
import ResultPopUp from "../../components/ResultPopUp";
import LoadingScreen from "../../components/LoadingScreen";
import HistoryBlock from "../../components/HistoryBlock";
import cookie from "react-cookies";

interface responseData {
  add_ons: any;
  caller_name: any;
  carrier: any;
  country_code: string;
  national_format: string;
  phone_number: string;
  url: string;
}

export default function PhoneValidation() {
  const theme = useTheme();
  const [selectCountry, setSelectCountry] = useState("");
  const [selectNumber, setSelectNumber] = useState("");
  const [responseData, setResponseData] = useState<responseData>();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setError(false);
  };
  const [isLoading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isError, setError] = useState(false);
  const historyRecord = cookie.load("historyRecord");

  const onHistoryRecord = (res: responseData) => {
    let inFifteenMinutes = new Date(new Date().getTime() + 24 * 3600 * 1000);
    if (cookie.load("historyRecord")) {
      let historyRecord = cookie.load("historyRecord");

      historyRecord.push(res);

      cookie.save("historyRecord", JSON.stringify(historyRecord), {
        path: "/",
        expires: inFifteenMinutes,
      });
    } else {
      let arrHistoryRecord: any[] = [];
      console.log(arrHistoryRecord.push(res));

      cookie.save("historyRecord", JSON.stringify(arrHistoryRecord), {
        path: "/",
        expires: inFifteenMinutes,
      });
    }
  };
  const onAPIClick = () => {
    setLoading(true);
    const data = {
      code: selectCountry,
      number: selectNumber,
    };

    checkNumber(data).then((res) => {
      setLoading(false);
      if (res.status === 404) {
        console.log("error");
        setErrorMsg(res.message);
        setError(true);
      } else if (res.phone_number && res.national_format) {
        setResponseData(res);
        onHistoryRecord(res);
      }
      handleOpen();
    });
  };
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Box
        sx={{
          width: { xs: "100%", md: 600 },
          height: { xs: "100%", md: 600 },
          backgroundColor: theme.palette.common.white,
          borderRadius: { md: 10, xs: 0 },
          mt: { md: 2, xs: 0 },
          mb: { md: 2, xs: 0 },
        }}
      >
        <Typography variant="h4" gutterBottom>
          Simple Phone Validator
        </Typography>
        <Typography variant="body1" gutterBottom>
          please enter the phone number
        </Typography>
        <Box>
          <Stack
            direction={{ md: "row", xs: "column" }}
            spacing={2}
            justifyContent={"center"}
            sx={{ mt: 2, mb: 2 }}
          >
            <AreaFlagSelection setSelectCountry={setSelectCountry} />
            <PhoneInput setSelectNumber={setSelectNumber} />
          </Stack>
          <Button variant="contained" onClick={onAPIClick}>
            Check
          </Button>
        </Box>
        <Box>
          <HistoryBlock historyRecord={historyRecord} />
        </Box>
      </Box>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <ResultPopUp
          open={open}
          handleClose={handleClose}
          responseData={responseData}
          isError={isError}
          errorMsg={errorMsg}
        />
      )}
    </Grid>
  );
}
