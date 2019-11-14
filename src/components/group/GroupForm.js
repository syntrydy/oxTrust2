import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import UserLogo from "../../assets/images/user2.png";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Delete";
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
const users = ["William"];
const GroupForm = () => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };
  const [checked, setChecked] = React.useState([0]);
  const handleToggle = value => () => {
    console.log("Current state is:" + value);
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <Paper className={classes.root} elevation={4}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "25px" }}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
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
          <Grid item xs={6}>
            <Paper className={classes.root}>
              <Typography variant="h5" component="h5">
                Users
                <Button
                  size="small"
                  style={{ float: "right" }}
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                ></Button>
              </Typography>
              <Divider />
              {users.length === 0 ? (
                <Typography variant="h6" component="h6" style={{textAlign:"center"}}>
                      You can user to this groups directly
                </Typography>
              ) : (
                <List className={classes.root}>
                  {users.map(value => {
                    const labelId ={value};

                    return (
                      <ListItem
                        key={value}
                        role={undefined}
                        dense
                        button
                      >
                        <ListItemAvatar>
                          <Avatar
                            alt={value}
                            src={UserLogo}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          style={{fontWeight:"bold"}}
                          id={labelId}
                          primary={value}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="remove" onClick={handleToggle(value)}>
                            <CommentIcon color="error" />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    );
                  })}
                </List>
              )}
            </Paper>
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

export default GroupForm;
