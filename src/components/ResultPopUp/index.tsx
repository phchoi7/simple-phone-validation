import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ERROR from "../../assets/logo/error.png";
import CORRECT from "../../assets/logo/correct.png";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: 400, xs: 350 },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface responseData {
  add_ons: any;
  caller_name: any;
  carrier: any;
  country_code: string;
  national_format: string;
  phone_number: string;
  url: string;
}

export default function ResultPopUp(props: {
  open: boolean;
  handleClose: any;
  responseData?: responseData;
  isError?: boolean;
  errorMsg?: string;
}) {
  const { open, handleClose, responseData, isError, errorMsg } = props;

  const ErrorArea = () => {
    return (
      <Box sx={{ justifyContent: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={ERROR} width={100} alt={"error"} />
        </Box>

        <Typography
          id="transition-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          {errorMsg}
        </Typography>

        <Button variant="contained" onClick={handleClose}>
          Back
        </Button>
      </Box>
    );
  };

  const ResultArea = () => {
    return (
      <Box sx={{ justifyContent: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={CORRECT} width={100} alt={"correct"} />
        </Box>

        <Typography
          id="transition-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          Your Number is Valid !
        </Typography>
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Information
            </ListSubheader>
          }
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary={`country code : ` + responseData?.country_code}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary={`phone number : ` + responseData?.national_format}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary={`area code + number : ` + responseData?.phone_number}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Button variant="contained" onClick={handleClose}>
          Back
        </Button>
      </Box>
    );
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>{isError ? <ErrorArea /> : <ResultArea />}</Box>
        </Fade>
      </Modal>
    </div>
  );
}
