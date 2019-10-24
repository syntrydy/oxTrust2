// @material-ui/icons
import Dashboard from "@material-ui/icons/DragIndicator";
import OpenIdIcon from "@material-ui/icons/PanTool";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from "@material-ui/icons/People";
import AttributeIcon from "@material-ui/icons/GavelRounded";
import UmaIcon from "@material-ui/icons/Usb";
import SamlIcon from "@material-ui/icons/Filter9Plus";
import RaduisIcon from "@material-ui/icons/FiberPin";
// core components/views for Admin layout
import About from "./components/pages/About.js";

const routes = [
  {
    path: "/home",
    name: "Dashboard",
    icon: Dashboard,
    component: About,
    layout: "/components/pages",
    divise: false
  },
  {
    path: "/openid",
    name: "OpenID Connect",
    icon: OpenIdIcon,
    component: About,
    layout: "/components/pages",
    divise: false
  },
  {
    path: "/groups",
    name: "Manage Groups",
    icon: PeopleIcon,
    component: About,
    layout: "/admin",
    divise: false
  },
  {
    path: "/saml",
    name: "SAML Trusts",
    icon: SamlIcon,
    component: About,
    layout: "/admin",
    divise: false
  },
  {
    path: "/attributes",
    name: "Attributes",
    icon: AttributeIcon,
    component: About,
    layout: "/admin",
    divise: false
  },
  {
    path: "/passport",
    name: "Passport",
    icon: AttributeIcon,
    component: About,
    layout: "/admin",
    divise: false
  },
  {
    path: "/uma",
    name: "Uma",
    icon: UmaIcon,
    component: About,
    layout: "/admin",
    divise: false
  },
  {
    path: "/raduis",
    name: "Raduis",
    icon: RaduisIcon,
    component: About,
    layout: "/admin",
    divise: true
  },
  {
    path: "/configuration",
    name: "Configuration",
    icon: SettingsIcon,
    component: About,
    layout: "/admin",
    divise: false
  }
];
export default routes;
