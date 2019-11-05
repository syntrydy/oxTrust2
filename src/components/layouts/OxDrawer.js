import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AppNewMenu from "./OxCollapseMenu";
import logo from "../../assets/logo.png";
const newMenuItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: "drag_indicator",
    path: "/"
  },
  { key: "groups", label: "Manages Groups", icon: "people", path: "/groups" },
  {
    key: "openids",
    label: "OpenId Connects",
    icon: "security",
    path: "/openid/clients"
  },
  {
    key: "attributes",
    label: "Attributes",
    icon: "transform",
    path: "/attributes"
  },
  {
    key: "certificates",
    label: "Certificates",
    icon: "school",
    path: "/certificates"
  },
  {
    key: "passport",
    label: "Passport",
    icon: "card_giftcard",
    path: "/passport/providers"
  },
  { key: "saml", label: "SAML", icon: "dynamic_feed", path: "/saml/trusts" },
  { key: "uma", label: "UMA", icon: "usb", path: "/uma/resources" },
  { key: "raduis", label: "Raduis", icon: "tune", path: "/raduis/config" },
  {
    key: "config",
    label: "Configuration",
    icon: "settings",
    path: "#",
    subMenus: [
      { key: "basic", label: "Basic", icon: "crop", path: "/config/basic" },
      {
        key: "advanced",
        label: "Advanced",
        icon: "compare",
        path: "#",
        subMenus: [
          {
            key: "json",
            label: "JSON",
            icon: "info",
            path: "/config/advanced/json"
          },
          {
            key: "log",
            label: "Log file",
            icon: "info",
            path: "/config/advanced/log"
          }
        ]
      },
      {
        key: "security",
        label: "Security",
        icon: "list",
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
