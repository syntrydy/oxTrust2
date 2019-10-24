/*eslint-disable*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import styles from "../assets/jss/footerStyle";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/" className={classes.block}>
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://gluu.org" className={classes.block}>
                Website
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://gluu.org/docs/" className={classes.block}>
                Documentation
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.gluu.org/blog/" className={classes.block}>
                Blog
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {"2018-"}{1900 + new Date().getYear()}{" "}
            <a
              href="https://gluu.org"
              target="_blank"
              className={classes.a}
            >
              Gluu Inc.
            </a>
            , IAM solution
          </span>
        </p>
      </div>
    </footer>
  );
}
