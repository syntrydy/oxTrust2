import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import useForm from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import OxInput from "../../layouts/OxInput";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import Switch from "@material-ui/core/Switch";
import SaveIcon from "@material-ui/icons/Save";

const ClientForm = () => {
  const loginRedirects = ["www.gasmyr.com"];
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });
  const [clientType, setType] = React.useState(null);
  const [subjectType, setSubjectType] = React.useState(null);
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const handleClientTypeChange = name => event => {
    setType(event.target.value);
  };
  const handleClientSubjectTypeChange = name => event => {
    setSubjectType(event.target.value);
  };
  return (
    <Paper elevation={4}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          paddingTop: "20px",
          paddingBottom: "20px"
        }}
      >
        <Grid container spacing={1}>
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
          <Grid item xs={4}>
            <FormControl>
              <InputLabel htmlFor="clientType">Type</InputLabel>
              <NativeSelect
                id="clientType"
                value={clientType}
                name="clientType"
                inputRef={register({ required: true })}
                onChange={handleClientTypeChange}
                input={<OxInput />}
              >
                <option value="web">Web</option>
                <option value="native">Native</option>
              </NativeSelect>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="clientType">Subject Type</InputLabel>
              <NativeSelect
                id="subjectType"
                value={subjectType}
                name="subjectType"
                inputRef={register({ required: true })}
                onChange={handleClientSubjectTypeChange}
                input={<OxInput />}
              >
                <option value="pairwise">pairwise</option>
                <option value="public">public</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={8}>
            <FormControlLabel
              control={
                <Switch
                  checked={state.checkedA}
                  inputRef={register({ required: true })}
                  onChange={handleChange("checkedA")}
                  value="checkedA"
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
                  onChange={handleChange("checkedB")}
                  value="checkedB"
                  name="preAuthorization"
                  color="primary"
                />
              }
              label="Pre-Authorization"
            />
          </Grid>
          <Grid item xs={4}>
            <InputLabel htmlFor="clientType">Login Redirect URIs:</InputLabel>
          </Grid>
          <Grid item xs={8}>
            {loginRedirects.map((uri, key) => (
              <div className="row" style={{ float: "right" }}>
                <input type="url" value={uri}></input>
                <button type="button">X</button>
              </div>
            ))}

            <div className="row" style={{ float: "right" }}>
              <button type="button">Add</button>
            </div>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="logoutRedirectUris"
              style={{ width: "100%" }}
              name="logoutRedirectUris"
              label="Logout Redirect URIs"
              margin="normal"
              inputRef={register({ required: true })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              size="meduim"
              type="submit"
              style={{ marginTop: "3%", marginBottom: "3%" }}
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

export default ClientForm;
