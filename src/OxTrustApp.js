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
import UserAddPage from "./components/pages/UserAddPage";
import TrustsPage from "./components/pages/TrustsPage";

import AcrsPage from "./components/pages/ArcsPage";

import CertificatesPage from "./components/pages/CertificatesPage";

import AttributePage from "./components/pages/AttributesPage";

import OpenIdClientsPage from "./components/pages/OpenIdClientsPage";
import OpenIdClientDetailPage from "./components/pages/OpenIdClientDetailPage";
import OpenIdClientEditPage from "./components/pages/OpenIdClientEditPage";

import OpenIdScopesPage from "./components/pages/OpenIdScopesPage";
import OpenIdScopeDetailPage from "./components/pages/OpenIdScopeDetailPage";
import OpenIdScopeEditPage from "./components/pages/OpenIdScopeEditPage";

import UmaResourcesPage from "./components/pages/UmaResourcesPage";
import UmaScopesPage from "./components/pages/UmaScopesPage";

import PassportProvidersPage from "./components/pages/PassportProvidersPage";

import RaduisClientsPage from "./components/pages/RaduisClientsPage";

import ClientAddPage from "./components/pages/ClientAddPage";

import RaduisServerConfigPage from "./components/pages/RaduisServerConfigPage";

import NotFoundPage from "./components/pages/NotFoundPage";

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
              <Route path="/" exact component={HomePage} />
              <Route path="/groups" exact component={GroupsPage} />
              <Route path="/group/add" exact component={GroupAddPage} />
              <Route path="/group/edit:gid" exact component={GroupEditPage} />
              <Route
                path="/group/detail:gid"
                exact
                component={GroupDetailPage}
              />

              <Route path="/users" exact component={UsersPage} />
              <Route path="/user/add" exact component={UserAddPage} />

              <Route path="/saml/trusts" exact component={TrustsPage} />

              <Route path="/saml/acrs" exact component={AcrsPage} />

              <Route path="/uma/resources" exact component={UmaResourcesPage} />

              <Route path="/uma/scopes" exact component={UmaScopesPage} />

              <Route
                path="/openid/clients"
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

              <Route
                path="/openid/client/add"
                exact
                component={ClientAddPage}
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
              <Route path="/certificates" exact component={CertificatesPage} />
              <Route
                path="/passport/providers"
                exact
                component={PassportProvidersPage}
              />
              <Route
                path="/raduis/clients"
                exact
                component={RaduisClientsPage}
              />
              <Route
                path="/raduis/config"
                exact
                component={RaduisServerConfigPage}
              />
              <Route exact component={NotFoundPage} />
            </Switch>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}
