import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const OxCustomTabs = () => {
  const [index, onChange] = useState(0);
  return (
    <AppBar position={"static"}>
      <Tabs value={index} onChange={(e, val) => onChange(val)}>
        <Tab label="Data" disableRipple />
        <Tab label="Rules" disableRipple />
        <Tab label="Indexes" disableRipple />
        <Tab label="Usage" disableRipple />
      </Tabs>
    </AppBar>
  );
};

OxCustomTabs.getTheme = muiBaseTheme => ({
  MuiTabs: {
    root: {
      marginLeft: muiBaseTheme.spacing.unit
    },
    indicator: {
      height: 3,
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
      backgroundColor: muiBaseTheme.palette.common.white
    }
  },
  MuiTab: {
    root: {
      textTransform: "initial",
      margin: `0 ${muiBaseTheme.spacing.unit * 2}px`,
      minWidth: 0,
      [muiBaseTheme.breakpoints.up("md")]: {
        minWidth: 0
      }
    },
    label: {
      fontWeight: "normal",
      letterSpacing: 0.5
    },
    labelContainer: {
      padding: 0,
      [muiBaseTheme.breakpoints.up("md")]: {
        padding: 0,
        paddingLeft: 0,
        paddingRight: 0
      }
    }
  }
});
export default OxCustomTabs;
