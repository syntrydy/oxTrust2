import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OxDrawer from "./components/layouts/OxDrawer";
import OxAppBar from "./components/layouts/OxAppBar";
import routes from "./routes.js";
import useStyles from "./assets/jss/oxStyle";
import HomePage from "./components/pages/HomePage";

import GroupsPage from "./components/pages/GroupsPage";
import GroupDetailPage from "./components/pages/GroupDetailPage";
import GroupEditPage from "./components/pages/GroupEditPage";
import GroupAddPage from "./components/pages/GroupAddPage";

import UsersPage from "./components/pages/UsersPage";
import SamlPage from "./components/pages/TrustsPage";

import AttributePage from "./components/pages/AttributesPage";

import OpenIdClientsPage from "./components/pages/OpenIdClientsPage";
import OpenIdClientDetailPage from "./components/pages/OpenIdClientDetailPage";
import OpenIdClientEditPage from "./components/pages/OpenIdClientEditPage";

import OpenIdScopesPage from "./components/pages/OpenIdScopesPage";
import OpenIdScopeDetailPage from "./components/pages/OpenIdScopeDetailPage";
import OpenIdScopeEditPage from "./components/pages/OpenIdScopeEditPage";

import UmaResourcesPage from "./components/pages/UmaResourcesPage";
import UmaScopesPage from "./components/pages/UmaScopesPage";

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
              <Route path="/group/add" exact component={GroupAddPage} />
              <Route path="/group/edit:gid" exact component={GroupEditPage} />
              <Route
                path="/group/detail:gid"
                exact
                component={GroupDetailPage}
              />

              <Route path="/users" exact component={UsersPage} />

              <Route path="/saml/trusts" exact component={SamlPage} />

              <Route path="/uma/resources" exact component={UmaResourcesPage} />

              <Route path="/uma/scopes" exact component={UmaScopesPage} />

              <Route
                path="/openid/clients"
                exact
                component={OpenIdClientsPage}
              />
              <Route
                path="/openid/client/add"
                exact
                component={OpenIdClientsPage}
              />
              <Route
                path="/openid/client/edit:gid"
                exact
                component={OpenIdClientEditPage}
              />
              <Route
                path="/openid/client/detail:gid"
                exact
                component={OpenIdClientDetailPage}
              />

              <Route path="/openid/scopes" exact component={OpenIdScopesPage} />
              <Route
                path="/openid/scope/add"
                exact
                component={OpenIdClientsPage}
              />
              <Route
                path="/openid/scope/edit:gid"
                exact
                component={OpenIdScopeEditPage}
              />
              <Route
                path="/openid/scope/detail:gid"
                exact
                component={OpenIdScopeDetailPage}
              />

              <Route path="/attributes" exact component={AttributePage} />
            </Switch>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}
