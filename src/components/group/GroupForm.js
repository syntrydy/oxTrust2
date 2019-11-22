import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import TextField from "@material-ui/core/TextField";
import useForm from "react-hook-form";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "5px;"
  },
  paper: {
    marginLeft: "10px;"
  }
}));
const GroupForm = () => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Paper className={classes.root} elevation={4}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ padding: "25px", paddingLeft: "10%", paddingRight: "10%"}}
      >
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <TextField
              id="groupName"
              name="groupName"
              style={{ width: "100%" }}
              className={classes.textField}
              label="Group name"
              inputRef={register({ required: true, maxlength: 20 })}
              margin="normal"
              variant="outlined"
            />
            {errors.groupName && "group name is required"}
            <TextField
              id="description"
              style={{ width: "100%" }}
              name="description"
              multiline
              className={classes.textField}
              label="Group description"
              margin="normal"
              inputRef={register({ required: true })}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              size="meduim"
              type="submit"
              variant="contained"
              style={{margin:"20px",marginLeft:"0px"}}
              color="secondary"
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
            <Button
              size="meduim"
              variant="contained"
              style={{margin:"20px"}}
              color="secondary"
              startIcon={<CancelIcon />}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default GroupForm;
