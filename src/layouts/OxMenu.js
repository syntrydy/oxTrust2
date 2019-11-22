import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import { NavLink} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from '@material-ui/core/styles';
import '../../../src/App.css'


const useStyles = makeStyles({
  root: {
    color: '#19857b'
  }
});


const OxMenu = props => {
  const { routes} = props;
  const classes = useStyles();
  
  return (
    <List>
      {routes.map((prop, key) => (
        <NavLink
            to={prop.path}
            activeClassName="active"
            style={{ textDecoration: 'none'}}
            key={key}>  
            <ListItem button key={prop.name} >
              <ListItemIcon>
                <prop.icon color="primary" />
              </ListItemIcon>
              <ListItemText primary={prop.name} classes={{root:classes.root}} ></ListItemText>
            </ListItem>
          {prop.divise && <Divider />}
          </NavLink>
      ))}
    </List>
  );
};

export default OxMenu;
