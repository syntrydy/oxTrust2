import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AppNewMenu from "./OxCollapseMenu";
import logo from "../assets/logo.png";
const newMenuItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: "drag_indicator",
    path: "/"
  },
  { key: "users", label: "Manages Users", icon: "people", path: "/users" },
  {
    key: "sso",
    label: "SSO",
    icon: "apps",
    path: "#",
    subMenus: [
      {
        key: "openid",
        label: "OpenId Connect",
        icon: "security",
        path: "/apps/openid"
      },
      { key: "saml", label: "SAML", icon: "dynamic_feed", path: "/apps/saml" }
    ]
  },
  {
    key: "authorization",
    label: "Authorization",
    icon: "business_center",
    path: "#",
    subMenus: [
      { key: "uma", label: "UMA", icon: "usb", path: "/uma/resources" }
    ]
  },
  {
    key: "authentication",
    label: "Authentication",
    icon: "sports_hockey",
    path: "#",
    subMenus: [
      {
        key: "passport",
        label: "Passport",
        icon: "card_giftcard",
        path: "/passport/providers"
      },
      { key: "raduis", label: "Raduis", icon: "tune", path: "/raduis/config" }
    ]
  },
  {
    key: "attributes",
    label: "Attributes",
    icon: "transform",
    path: "/attributes"
  },
  {
    key: "scripts",
    label: "Custom Scripts",
    icon: "ac_unit",
    path: "/scripts"
  },
  {
    key: "certificates",
    label: "Certificates",
    icon: "school",
    path: "/certificates"
  },
  {
    key: "logs",
    label: "Logs",
    icon: "timeline",
    path: "/logs"
  },
  {
    key: "config",
    label: "Configuration",
    icon: "settings",
    path: "#",
    subMenus: [
      {
        key: "organization",
        label: "Organization",
        icon: "apartment",
        path: "/config/org"
      },
      {
        key: "authentication",
        label: "Authentication",
        icon: "control_camera",
        path: "/config/authentication"
      },
      {
        key: "registration",
        label: "Registration",
        icon: "how_to_reg",
        path: "/config/registration"
      },
      {
        key: "cacherefresh",
        label: "Cache Refresh",
        icon: "device_hub",
        path: "/config/cacherefresh"
      },
      {
        key: "json",
        label: "JSON",
        icon: "linear_scale",
        path: "/config/json"
      },
      
      {
        key: "security",
        label: "Security",
        icon: "fingerprint",
        path: "/config/security"
      }
    ]
  }
];

const OxDrawer = props => {
  const { theme, classes, open, handleDrawerClose, hist } = props;
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
      open={open}
      elevation={20}
    >
      <div className={classes.toolbar}>
        <img src={logo} alt="Logo" height="32" width="160" />
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <AppNewMenu
        selectedKeys={["dashboard"]}
        menus={newMenuItems}
        hist={hist}
      />
    </Drawer>
  );
};

export default OxDrawer;
