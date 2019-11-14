import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import useForm from "react-hook-form";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";

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

const UserForm = () => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const [age, setAge] = React.useState("");
  const onSubmit = values => {
    console.log(values);
  };
  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <Paper elevation={4}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "25px" }}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
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
          <Grid item xs={6}>
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
          <Grid item xs={6}>
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
          <Grid item xs={6}>
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
          <Grid item xs={6}>
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
          <Grid item xs={6}>
            <FormControl className={classes.inputwidth}>
              <Select
                id="statusSelect"
                onChange={handleChange}
                value={age}
              ></Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
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
          <Grid item xs={6}>
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
            <Button
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
