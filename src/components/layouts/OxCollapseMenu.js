import React, { useState, useEffect } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import Icon from "@material-ui/core/Icon";
import ButtonBase from "@material-ui/core/ButtonBase";
import Collapse from "@material-ui/core/Collapse";
import { NavLink } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    header: { display: "flex" },
    headerSelected: {
      fontWeight: "bold",
      "& > $item": {
        fontWeight: "bold",
        color: palette.primary.main
      }
    },
    headerExpanded: {
      "& > $item": {
        fontWeight: "bold"
      }
    },
    root: {
      color: "inherit",
      "&:hover": {
        color: "white"
      }
    },
    item: {
      minWidth: 0,
      // set width
      width: 230,
      // item text color
      color: "#19857b",
      flexGrow: 1,
      "&:hover": {
        //backgroundColor: palette.grey[100],
        backgroundColor: palette.secondary.main,
        color: "white"
      }
    },
    itemArrow: {
      margin: "0 -4px 0 auto"
    },
    toggle: {
      minWidth: 48,
      "&:hover": {
        backgroundColor: palette.secondary.main
      }
    },
    sub1: {
      paddingLeft: 40,
      color: "#19857b",
      "&:hover": {
        //backgroundColor: palette.grey[100],
        backgroundColor: palette.secondary.main,
        color: "white"
      }
    },
    sub1Selected: {
      fontWeight: "bold",
      color: palette.primary.main
    },
    sub1Expanded: {
      //fontWeight: "bold"
    },
    sub2: {
      paddingLeft: 64,
      position: "relative",
      color: "#19857b",
      "&:before": {
        content: '" "',
        position: "absolute",
        width: 3,
        height: "100%",
        left: 40,
        backgroundColor: palette.grey[100]
      },
      "&:hover": {
        //backgroundColor: palette.grey[100]
        backgroundColor: palette.primary.main
      }
    },
    sub2Selected: {
      color: palette.primary.main,
      fontWeight: "bold",
      "&:after": {
        content: '" "',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 3,
        fontWeight: "bold",
        height: "40%",
        left: 40,
        backgroundColor: palette.primary.main,
        color: "white"
      }
    }
  };
});

const Header = ({
  icon,
  label,
  path,
  key,
  selected,
  expanded,
  separated,
  toggle = separated,
  onMenuClick,
  onToggle,
  ...menuItemProps
}) => {
  const classes = useStyles();
  const iconLeft = `keyboard_arrow_${expanded ? "up" : "down"}`;
  return (
    <div
      className={cx(
        classes.header,
        selected && classes.headerSelected,
        expanded && classes.headerExpanded
      )}
    >
      {separated ? (
        <>
          <NavLink
            to={path}
            style={{ textDecoration: "none" }}
            key={key}
            className="active"
          >
            <MenuItem
              className={classes.item}
              {...menuItemProps}
              onClick={onMenuClick}
              classes={{ root: classes.root }}
            >
              {" "}
              <ListItemIcon classes={{ root: classes.root }}>
                <Icon color="primary">{icon}</Icon>
              </ListItemIcon>
              &nbsp;&nbsp;&nbsp;&nbsp;{label}
            </MenuItem>
          </NavLink>
          {toggle && (
            <ButtonBase className={classes.toggle} onClick={onToggle}>
              <Icon>{iconLeft}</Icon>
            </ButtonBase>
          )}
        </>
      ) : (
        <NavLink
          className="active"
          to={path}
          style={{ textDecoration: "none" }}
          key={key}
        >
          <MenuItem
            className={classes.item}
            {...menuItemProps}
            onClick={e => {
              onToggle(e);
              onMenuClick(e);
            }}
            classes={{ root: classes.root }}
          >
            <ListItemIcon classes={{ root: classes.root }}>
              <Icon color="primary">{icon}</Icon>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{label}
            </ListItemIcon>
            {toggle && <Icon className={classes.itemArrow}>{iconLeft}</Icon>}
          </MenuItem>
        </NavLink>
      )}
    </div>
  );
};

Header.defaultProps = {
  onToggle: () => {},
  onMenuClick: () => {}
};

const OxCollapseMenu = ({ menus, selectedKey, openKeys, hist }) => {
  const classes = useStyles();
  const [currentKey, setCurrentKey] = useState(selectedKey || "");
  const [currentOpenKeys, setCurrentOpenKeys] = useState(openKeys || []);
  //console.log("currentOpenKeys", currentOpenKeys);
  useEffect(() => {
    setCurrentKey(selectedKey);
  }, [selectedKey]);

  useEffect(() => {
    setCurrentOpenKeys(openKeys);
  }, [openKeys]);

  const handleToggle = key => () => {
    if (currentOpenKeys.includes(key)) {
      return setCurrentOpenKeys(currentOpenKeys.filter(k => k !== key));
    }
    return setCurrentOpenKeys([...currentOpenKeys, key]);
  };
  const renderMenus = level => ({
    key,
    label,
    path,
    icon,
    subMenus,
    separated,
    ...rest
  }) => (
    <React.Fragment key={key}>
      {level === 0 ? (
        <Header
          label={label}
          path={path}
          icon={icon}
          selected={
            subMenus ? separated && currentKey === key : currentKey === key
          }
          expanded={currentOpenKeys.includes(key)}
          separated={separated}
          onMenuClick={() => {
            if (!subMenus || separated) {
              setCurrentKey(key);
            }
            if (subMenus && !currentOpenKeys.includes(key)) {
              handleToggle(key)();
            }
          }}
          {...(subMenus && {
            toggle: true,
            onToggle: handleToggle(key)
          })}
          {...rest}
        />
      ) : (
        <NavLink to={path} style={{ textDecoration: "none" }} key={key}>
          <MenuItem
            className={cx(
              classes[`sub${level}`],
              currentKey === key && classes[`sub${level}Selected`],
              currentOpenKeys.includes(key) && classes[`sub${level}Expanded`]
            )}
            onClick={() =>
              subMenus ? handleToggle(key)() : setCurrentKey(key)
            }
            {...rest}
            classes={{ root: classes.root }}
          >
            <ListItemIcon classes={{ root: classes.root }}>
              <Icon color="primary">{icon}</Icon>
              &nbsp;&nbsp;&nbsp;&nbsp;{label}
              {" Gasm"}
            </ListItemIcon>
          </MenuItem>
        </NavLink>
      )}
      {subMenus && (
        <Collapse in={currentOpenKeys.includes(key)}>
          {subMenus.map(renderMenus(level + 1))}
        </Collapse>
      )}
    </React.Fragment>
  );
  return menus.map(renderMenus(0));
};

OxCollapseMenu.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string
    })
  ),
  selectedKey: PropTypes.string,
  openKeys: PropTypes.arrayOf(PropTypes.string)
};
OxCollapseMenu.defaultProps = {
  menus: [],
  selectedKey: "",
  openKeys: []
};

export default OxCollapseMenu;
