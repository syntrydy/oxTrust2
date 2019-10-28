import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OxDrawer from "./components/layouts/OxDrawer";
import OxAppBar from "./components/layouts/OxAppBar";
import routes from "./routes.js";
import useStyles from "./assets/jss/oxStyle";
import AboutPage from "./components/pages/About";
import GroupPage from "./components/pages/GroupPage";
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
              <Route path="/home" exact component={AboutPage} />
              <Route path="/groups" exact component={GroupPage} />
            </Switch>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}
