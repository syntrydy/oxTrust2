import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import useForm from "react-hook-form";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "11px;"
  },
  paper: {
    marginLeft: "10px;"
  },
  inputwidth: {
    width: "99%",
    marginTop: "2px",
    marginBottom: "2px"
  }
}));

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    width: "80%",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const UserForm = () => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const [status, setStatus] = React.useState("");
  const onSubmit = values => {
    console.log(values);
  };
  const handleStatusChange = event => {
    setStatus(event.target.value);
  };

  return (
    <Paper elevation={4}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          paddingTop: "20px"
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <TextField
              id="username"
              name="username"
              className={classes.inputwidth}
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
              name="firstName"
              className={classes.inputwidth}
              label="First Name"
              margin="normal"
              inputRef={register({ required: true })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="lastName"
              name="lastName"
              className={classes.inputwidth}
              label="Last Name"
              margin="normal"
              inputRef={register({ required: true })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="displayName"
              name="displayName"
              className={classes.inputwidth}
              label="Display Name"
              margin="normal"
              inputRef={register({ required: true })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              name="Email"
              className={classes.inputwidth}
              type="email"
              label="Email"
              margin="normal"
              inputRef={register({ required: true })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              name="password"
              className={classes.inputwidth}
              label="Password"
              margin="normal"
              inputRef={register({ required: true })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="confirmpassword"
              name="confirmpassword"
              className={classes.inputwidth}
              label="Confirm Password"
              margin="normal"
              inputRef={register({ required: true })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.margin} style={{ width: "200px" }}>
              <InputLabel htmlFor="status">Status</InputLabel>
              <NativeSelect
                id="statusSelectBox"
                value={status}
                name="status"
                inputRef={register({ required: true })}
                onChange={handleStatusChange}
                input={<BootstrapInput />}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              style={{ marginTop: "3%", marginBottom: "3%" }}
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
