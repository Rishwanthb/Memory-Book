import { makeStyles } from "@material-ui/core/styles";
// core components
import Grid from "@material-ui/core/Grid";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";
import React, { useRef, useState } from "react";
import { useAuth } from "../../authservices/auth";
import { Link, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(styles);

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const classes = useStyles();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions!");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  setTimeout(function () {
    setCardAnimation("");
  }, 700);

  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form onSubmit={handleSubmit} className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h3>Memory Book</h3>
                  </CardHeader>
                  <CardBody>
                    {error}
                    {message}
                    <TextField
                      id="standard-textarea"
                      type="email"
                      inputRef={emailRef}
                      label="Email"
                      placeholder="Email"
                      className="Textarea"
                    />
                    <Grid
                      justify="space-between" // Add it here :)
                      container
                      spacing={24}
                    >
                      <Grid item>
                        <Link to="/login-page">Sign In?</Link>{" "}
                      </Grid>
                      <Grid item>
                        <Link to="/signup">Sign Up</Link>
                      </Grid>
                    </Grid>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      disabled={loading}
                      type="submit"
                      simple
                      color="danger"
                      size="lg"
                    >
                      Reset Password
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
