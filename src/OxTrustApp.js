import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OxDrawer from "./components/layouts/OxDrawer";
import OxAppBar from "./components/layouts/OxAppBar";
import routes from "./routes.js";
import useStyles from "./assets/jss/oxStyle";
import HomePage from "./components/pages/HomePage";
import GroupsPage from "./components/pages/GroupsPage";
import UsersPage from "./components/pages/UsersPage";
import GroupDetailPage from "./components/pages/GroupDetailPage";
import GroupAddPage from "./components/pages/GroupAddPage";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme/Theme";
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

export default function MyDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router hist={hist}>
        <div className={classes.root}>
          <OxAppBar
            classes={classes}
            open={open}
            handleDrawerOpen={handleDrawerOpen}
          />
          <OxDrawer
            routes={routes}
            theme={theme}
            classes={classes}
            open={open}
            handleDrawerClose={handleDrawerClose}
            hist={hist}
          />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route path="/home" exact component={HomePage} />
              <Route path="/groups" exact component={GroupsPage} />
              <Route path='/group/detail:gid' exact component={GroupDetailPage} />
              <Route path="/group/add" exact component={GroupAddPage} />
              <Route path="/group/edit" exact component={GroupsPage} />

              <Route path="/users" exact component={UsersPage} />
            </Switch>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}
