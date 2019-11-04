// @material-ui/icons
import Dashboard from "@material-ui/icons/DragIndicator";
import OpenIdIcon from "@material-ui/icons/Security";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from "@material-ui/icons/People";
import AttributeIcon from "@material-ui/icons/GavelRounded";
import PassportIcon from "@material-ui/icons/CardTravel";
import UmaIcon from "@material-ui/icons/Usb";
import SamlIcon from "@material-ui/icons/Filter9Plus";
import RaduisIcon from "@material-ui/icons/FiberPin";
import CertificatesIcon from "@material-ui/icons/School";

const routes = [
  {
    path: "/",
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
    path: "/openid/clients",
    name: "OpenID Connect",
    icon: OpenIdIcon,
    divise: false
  },
  {
    path: "/attributes",
    name: "Attributes",
    icon: AttributeIcon,
    divise: false
  },
  {
    path: "/certificates",
    name: "Certificates",
    icon: CertificatesIcon,
    divise: false
  },
  {
    path: "/passport/providers",
    name: "Passport",
    icon: PassportIcon,
    divise: false
  },
  {
    path: "/saml/trusts",
    name: "SAML",
    icon: SamlIcon,
    divise: false
  },
  {
    path: "/uma/resources",
    name: "UMA",
    icon: UmaIcon,
    layout: "/admin",
    divise: false
  },
  {
    path: "/raduis/config",
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
