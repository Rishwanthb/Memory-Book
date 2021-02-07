/*eslint-disable*/
import React from "react";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

// Auth
import app from "../../authservices/firebase.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={AccountCircleIcon}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Update Password
            </Link>,
            <Link
              className={classes.dropdownLink}
              onClick={() => app.auth().signOut()}
            >
              Sign out
            </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}
