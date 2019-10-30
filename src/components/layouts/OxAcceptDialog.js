import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

const useStyles = makeStyles(theme => ({
  typography: {
    margin: theme.spacing(2)
  }
}));

const OxAcceptDialog = () => {
  const classes = useStyles();
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Delete
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <Typography className={classes.typography}>
              The content of the Popover.
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};
export default OxAcceptDialog;
