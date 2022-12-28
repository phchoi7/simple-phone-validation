import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
export default function HistoryBlock(props: { historyRecord: any[] }) {
  const [open, setOpen] = React.useState(true);
  const { historyRecord } = props;
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        overflow: "scroll",
        maxHeight: 350,
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          History Record
        </ListSubheader>
      }
    >
      {historyRecord
        ? historyRecord.map((data) => {
            return (
              <ListItemButton>
                <ListItemText
                  primary={`${data.country_code}  ${data.phone_number}`}
                />
              </ListItemButton>
            );
          })
        : ""}
    </List>
  );
}
