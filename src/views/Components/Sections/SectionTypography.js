import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import birthday from "assets/img/category/birthday.jpg";
import outings from "assets/img/category/outings.jpg";
import party from "assets/img/category/party.jpg";
import festives from "assets/img/category/festives.jpg";
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

// Firebase
import app from "../../../authservices/firebase";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const [masterlist, setMasterlist] = React.useState([]);
  const [displaylist, setDisplaylist] = React.useState([]);
  const classes = useStyles();

  React.useEffect(() => {
    const dataRef = app.database().ref("memories");
    dataRef.on("value", (snapshot) => {
      const masterdata = snapshot.val();
      setMasterlist(masterdata);
    });
  }, []);

  const selectcategory = (category) => {
    console.log("Clicked on birthday tab", category);
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Category</h2>
        </div>
        <br />
        <GridContainer>
          <GridItem xs={12} sm={2}>
            <img
              src={birthday}
              onClick={() => selectcategory("birthday")}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRoundedCircle +
                " " +
                classes.imgFluid
              }
            />
            <h3>Birthday</h3>
          </GridItem>
          <GridItem xs={12} sm={2} className={classes.marginLeft}>
            <img
              src={outings}
              onClick={() => selectcategory("outings")}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRoundedCircle +
                " " +
                classes.imgFluid
              }
            />
            <h3>Outings</h3>
          </GridItem>
          <GridItem xs={12} sm={2} className={classes.marginLeft}>
            <img
              src={festives}
              onClick={() => selectcategory("festives")}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRoundedCircle +
                " " +
                classes.imgFluid
              }
            />
            <h3>Festives</h3>
          </GridItem>
          <GridItem xs={12} sm={2} className={classes.marginLeft}>
            <img
              src={party}
              onClick={() => selectcategory("parties")}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRoundedCircle +
                " " +
                classes.imgFluid
              }
            />
            <h3>Parties</h3>
          </GridItem>
        </GridContainer>
        <GridContainer />
      </div>
      {masterlist.map((res, index) => (
        <p key={index}>
          {res.sort_key}-{res.name}-{res.year}
          <br />
        </p>
      ))}
      <div className={classes.space50} />
    </div>
  );
}
