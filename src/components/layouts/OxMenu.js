import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import { Link, BrowserRouter as Router } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const Menu = props => {
  const { routes } = props;
  return (
    <List>
      {routes.map((prop, key) => (
        <React.Fragment key={key}>
          <ListItem button key={prop.name}>
            <ListItemIcon>
              <prop.icon color="primary" />
            </ListItemIcon>
            <ListItemText primary={prop.name}></ListItemText>
          </ListItem>
          {prop.divise && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default Menu;
