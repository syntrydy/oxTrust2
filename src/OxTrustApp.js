import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OxDrawer from "./layouts/OxDrawer";
import OxAppBar from "./layouts/OxAppBar";
import routes from "./routes.js";
import useStyles from "./assets/jss/oxStyle";
import HomePage from "./pages/HomePage";

import GroupsPage from "./pages/group/GroupsPage";
import GroupDetailPage from "./pages/group/GroupDetailPage";
import GroupEditPage from "./pages/group/GroupEditPage";
import GroupAddPage from "./pages/group/GroupAddPage";

import UsersPage from "./pages/user/UsersPage";
import UserAddPage from "./pages/user/UserAddPage";
import UserEditPage from "./pages/user/UserEditPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import TrustsPage from "./pages/saml/TrustsPage";

import AcrsPage from "./pages/saml/ArcsPage";

import CertificatesPage from "./pages/CertificatesPage";

import AttributePage from "./pages/attribute/AttributesPage";
import AttributeAddPage from "./pages/attribute/AttributeAddPage";
import AttributeEditPage from "./pages/attribute/AttributeEditPage";

import OpenIdClientsPage from "./pages/client/OpenIdClientsPage";
import OpenIdClientDetailPage from "./pages/client/OpenIdClientDetailPage";
import OpenIdClientEditPage from "./pages/client/OpenIdClientEditPage";

import OpenIdScopesPage from "./pages/scope/OpenIdScopesPage";
import OpenIdScopeAddPage from "./pages/scope/OpenIdScopeAddPage";
import OpenIdScopeDetailPage from "./pages/scope/OpenIdScopeDetailPage";
import OpenIdScopeEditPage from "./pages/scope/OpenIdScopeEditPage";

import UmaResourcesPage from "./pages/uma/UmaResourcesPage";
import UmaScopesPage from "./pages/uma/UmaScopesPage";

import PassportProvidersPage from "./pages/passport/PassportProvidersPage";

import RaduisClientsPage from "./pages/raduis/RaduisClientsPage";

import ClientAddPage from "./pages/client/ClientAddPage";

import RaduisServerConfigPage from "./pages/raduis/RaduisServerConfigPage";

import NotFoundPage from "./pages/NotFoundPage";

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
              <Route path="/profile" exact component={UserProfilePage} />
              <Route path="/user/add" exact component={UserAddPage} />
              <Route path="/user/edit:gid" exact component={UserEditPage} />

              <Route path="/apps/saml" exact component={TrustsPage} />

              <Route path="/saml/acrs" exact component={AcrsPage} />

              <Route path="/uma/resources" exact component={UmaResourcesPage} />

              <Route path="/uma/scopes" exact component={UmaScopesPage} />

              <Route path="/apps/openid" exact component={OpenIdClientsPage} />

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
                component={OpenIdScopeAddPage}
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
              <Route path="/attribute/add" exact component={AttributeAddPage} />
              <Route
                path="/attribute/edit:gid"
                exact
                component={AttributeEditPage}
              />

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
