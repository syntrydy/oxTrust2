import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Slider from "@material-ui/core/Slider";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import useForm from "react-hook-form";
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
    width: "99%"
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

const AttributeForm = () => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const [status, setStatus] = React.useState("");
  const [multivalued, setMultiValued] = React.useState("");
  const [scimExtended, setScimExtended] = React.useState("");
  const [type, setType] = React.useState("");
  const [edittype, setEditType] = React.useState([]);
  const [viewtype, setViewType] = React.useState([]);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true
  });
  const onSubmit = values => {
    console.log(values);
  };
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const handleStatusChange = event => {
    setStatus(event.target.value);
  };
  const handleMultivaluedChange = event => {
    setMultiValued(event.target.value);
  };
  const handleScimExtendedChange = event => {
    setScimExtended(event.target.value);
  };
  const handleTypeChange = event => {
    setType(event.target.value);
  };
  const handleEditTypeChange = event => {
    setEditType(event.target.value);
  };
  const handleViewTypeChange = event => {
    setViewType(event.target.value);
  };

  return (
    <Paper elevation={4} style={{ paddingLeft: "10%", paddingRight: "10%" }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "25px" }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <TextField
              id="name"
              name="name"
              className={classes.inputwidth}
              label="Attribute name"
              inputRef={register({ required: false, maxlength: 20 })}
              margin="normal"
              variant="outlined"
            />
            {errors.name && "name is required"}
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="displayName"
              name="displayName"
              className={classes.inputwidth}
              label="Display Name"
              margin="normal"
              inputRef={register({ required: false })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="description"
              name="description"
              className={classes.inputwidth}
              label="Description"
              margin="normal"
              inputRef={register({ required: true })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.margin} style={{ width: "200px" }}>
              <InputLabel htmlFor="type">Type</InputLabel>
              <NativeSelect
                id="type"
                value={type}
                name="type"
                inputRef={register({ required: true })}
                onChange={handleTypeChange}
                input={<BootstrapInput />}
              >
                <option value="Text">Text</option>
                <option value="Numeric">Numeric</option>
                <option value="Boolean">Boolean</option>
                <option value="Binary">Binary</option>
                <option value="Certificate">Certificate</option>
                <option value="Date">Date</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.margin} style={{ width: "200px" }}>
              <InputLabel htmlFor="edittype">Edit Type</InputLabel>
              <NativeSelect
                id="edittype"
                value={edittype}
                name="edittype"
                multiple={true}
                inputRef={register({ required: true })}
                onChange={handleEditTypeChange}
                input={<BootstrapInput />}
              >
                <option value="admin">admin</option>
                <option value="edit">edit</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
          <FormControl className={classes.margin} style={{ width: "200px" }}>
              <InputLabel htmlFor="viewtype">View Type</InputLabel>
              <NativeSelect
                id="viewtype"
                value={viewtype}
                multiple={true}
                name="ediviewtypettype"
                inputRef={register({ required: true })}
                onChange={handleViewTypeChange}
                input={<BootstrapInput />}
              >
                <option value="admin">admin</option>
                <option value="edit">edit</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="usageType"
              name="usageType"
              className={classes.inputwidth}
              label="Usage Type"
              margin="normal"
              inputRef={register({ required: false })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="pattern"
              name="pattern"
              className={classes.inputwidth}
              label="Regex Pattern"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="authclaimname"
              name="authclaimname"
              className={classes.inputwidth}
              label="oxAuth claim name"
              margin="normal"
              inputRef={register({ required: false })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.margin} style={{ width: "200px" }}>
              <InputLabel htmlFor="multivalued">Multivalued</InputLabel>
              <NativeSelect
                id="multivalued"
                value={multivalued}
                name="multivalued"
                inputRef={register({ required: true })}
                onChange={handleMultivaluedChange}
                input={<BootstrapInput />}
              >
                <option value="false">False</option>
                <option value="true">True</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.margin} style={{ width: "200px" }}>
              <InputLabel htmlFor="scimextended">
                SCIM extended attribute
              </InputLabel>
              <NativeSelect
                id="scimextended"
                value={scimExtended}
                name="scimextended"
                inputRef={register({ required: true })}
                onChange={handleScimExtendedChange}
                input={<BootstrapInput />}
              >
                <option value="false">False</option>
                <option value="true">True</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChange("checkedA")}
                  value="checkedA"
                />
              }
              label="Enable custom validation for this attribute "
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChange("checkedB")}
                  value="checkedB"
                />
              }
              label="Enable tooltip for this attribute "
            />
          </Grid>
          <Grid item xs={12}>
            <Typography id="discrete-slider" gutterBottom>
              Minimum Length
            </Typography>
            <Slider
              defaultValue={0}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              style={{ width: "90%" }}
              step={1}
              marks
              min={0}
              max={10}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography id="discrete-slider" gutterBottom>
              Maximum Length
            </Typography>
            <Slider
              defaultValue={0}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              style={{ width: "90%" }}
              marks
              min={0}
              max={100}
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
              style={{ marginTop: "5%" }}
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

export default AttributeForm;
