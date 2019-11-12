import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import useForm from "react-hook-form";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "11px;"
  },
  paper: {
    marginLeft: "10px;"
  }
}));

const UserForm = () => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Paper className={classes.root} elevation={4}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "25px" }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <TextField
              id="username"
              name="username"
              style={{ width: "100%" }}
              className={classes.textField}
              label="User name"
              inputRef={register({ required: true, maxlength: 20 })}
              margin="normal"
              variant="outlined"
            />
            {errors.groupName && "username is required"}
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="firstName"
              style={{ width: "100%" }}
              name="firstName"
              className={classes.textField}
              label="First Name"
              margin="normal"
              inputRef={register({ required: true })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="lastName"
              style={{ width: "100%" }}
              name="lastName"
              className={classes.textField}
              label="Last Name"
              margin="normal"
              inputRef={register({ required: true })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="displayName"
              style={{ width: "100%" }}
              name="displayName"
              className={classes.textField}
              label="Display Name"
              margin="normal"
              inputRef={register({ required: true })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              style={{ width: "100%" }}
              name="Email"
              className={classes.textField}
              label="Email"
              margin="normal"
              inputRef={register({ required: true })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              style={{ width: "100%" }}
              name="password"
              className={classes.textField}
              label="Password"
              margin="normal"
              inputRef={register({ required: true })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="confirmpassword"
              style={{ width: "100%" }}
              name="confirmpassword"
              className={classes.textField}
              label="Confirm Password"
              margin="normal"
              inputRef={register({ required: true })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              size="small"
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default UserForm;
