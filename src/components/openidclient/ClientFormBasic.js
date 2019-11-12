import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const ClientFormBasic = props => {
  const { register, errors } = props;
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  return (
    <div>
      <Grid item xs={12}>
        <TextField
          id="clientName"
          name="clientName"
          style={{ width: "100%" }}
          label="Client name"
          inputRef={register({ required: true, maxlength: 20 })}
          margin="normal"
          variant="outlined"
        />
        {errors.clientName && "Client name is required"}
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="description"
          style={{ width: "100%" }}
          name="description"
          multiline
          label="Description"
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
          label="Display Name"
          margin="normal"
          inputRef={register({ required: true })}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="email"
          type="email"
          style={{ width: "100%" }}
          name="Email"
          label="Email"
          margin="normal"
          inputRef={register({ required: true })}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedB}
              inputRef={register({ required: true })}
              onChange={handleChange('checkedB')}
              value="checkedB"
              name="persistClientAuth"
              color="primary"
            />
          }
          label="Persist Client Authorizations"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedB}
              inputRef={register({ required: true })}
              onChange={handleChange('checkedB')}
              value="checkedB"
              name="preAuthorization"
              color="primary"
            />
          }
          label="Pre-Authorization"
        />
        <FormControlLabel
          inputRef={register({ required: true })}
          control={
            <Switch
              checked={state.checkedB}
              inputRef={register({ required: true })}
              onChange={handleChange('checkedB')}
              value="checkedB"
              name="preAuthorization"
              color="primary"
            />
          }
          label="Pre-Authorization"
        />
      </Grid>
      <Grid item xs={6}>
        
      </Grid>
    </div>
  );
};

export default ClientFormBasic;
