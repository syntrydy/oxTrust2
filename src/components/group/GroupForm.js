import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/GroupAdd";
import LocationOnIcon from "@material-ui/icons/Send";
import GroupUsers from "../group/GroupUsers";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "11px;"
  },
  paper: {
    marginLeft: "10px;"
  }
}));
 const data=[];
const GroupForm = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={6} className={classes.paper}>
          <FormControl style={{ width: "95%" }}>
            <TextField
              style={{ width: "95%" }}
              id="groupName"
              className={classes.textField}
              label="Group name"
              margin="normal"
              variant="outlined"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} className={classes.paper}>
          <FormControl style={{ width: "95%" }}>
            <TextField
              style={{ width: "95%" }}
              id="description"
              className={classes.textField}
              label="Group description"
              margin="normal"
              variant="outlined"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
        <GroupUsers data={data}></GroupUsers>
        </Grid>
        <Grid item xs={12}>
          <BottomNavigation
            onChange={(event, newValue) => {  }}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction label="Reset" icon={<RestoreIcon color="primary"/>} />
            <BottomNavigationAction label="Cancel" icon={<FavoriteIcon color="primary"/>} />
            <BottomNavigationAction label="Save" icon={<LocationOnIcon color="primary" />} />
          </BottomNavigation>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GroupForm;
