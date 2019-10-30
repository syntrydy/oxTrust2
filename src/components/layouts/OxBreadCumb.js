import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import WhatshotIcon from "@material-ui/icons/People";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2)
  },
  link: {
    display: "flex"
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20
  }
}));

const OxBreadCumb = props => {
  const classes = useStyles();
  return (
    <Paper
      elevation={6}
      className={classes.root}
      style={{ marginTop: "-15px" }}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Link color="inherit" href="/home" className={classes.link}>
          <HomeIcon className={classes.icon} color="primary" />
          Home
        </Link>
        {props.breads.map((bread, key) => (
          <Link
            key={key}
            color="inherit"
            href={bread.path}
            className={classes.link}
          >
            <WhatshotIcon className={classes.icon} color="primary" />
            {bread.text}
          </Link>
        ))}
      </Breadcrumbs>
    </Paper>
  );
};
export default OxBreadCumb;
