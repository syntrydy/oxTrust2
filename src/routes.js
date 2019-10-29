// @material-ui/icons
import Dashboard from "@material-ui/icons/DragIndicator";
import OpenIdIcon from "@material-ui/icons/PanTool";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from "@material-ui/icons/People";
import AttributeIcon from "@material-ui/icons/GavelRounded";
import UmaIcon from "@material-ui/icons/Usb";
import SamlIcon from "@material-ui/icons/Filter9Plus";
import RaduisIcon from "@material-ui/icons/FiberPin";

const routes = [
  {
    path: "/home",
    name: "Dashboard",
    icon: Dashboard,
    divise: false
  },
  {
    path: "/groups",
    name: "Manage Groups",
    icon: PeopleIcon,
    divise: false
  },
  {
    path: "/openid",
    name: "OpenID Connect",
    icon: OpenIdIcon,
    divise: false
  },
  {
    path: "/saml",
    name: "SAML Trusts",
    icon: SamlIcon,
    divise: false
  },
  {
    path: "/attributes",
    name: "Attributes",
    icon: AttributeIcon,
    divise: false
  },
  {
    path: "/passport",
    name: "Passport",
    icon: AttributeIcon,
    divise: false
  },
  {
    path: "/uma",
    name: "Uma",
    icon: UmaIcon,
    layout: "/admin",
    divise: false
  },
  {
    path: "/raduis",
    name: "Raduis",
    icon: RaduisIcon,
    divise: true
  },
  {
    path: "/configuration",
    name: "Configuration",
    icon: SettingsIcon,
    divise: false
  }
];
export default routes;
