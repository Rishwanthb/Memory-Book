import React, { useRef, useState } from "react";
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
import { useAuth } from "../../authservices/auth";
import { Link, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import "./LoginPage.css";

const useStyles = makeStyles(styles);

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const classes = useStyles();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
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
                    <TextField
                      id="standard-textarea"
                      type="email"
                      inputRef={emailRef}
                      label="Email"
                      placeholder="Email"
                      className="Textarea"
                    />
                    <br />
                    <TextField
                      id="standard-textarea"
                      type="Password"
                      inputRef={passwordRef}
                      label="Password"
                      placeholder="Password"
                      className="Textarea"
                    />
                    <Grid
                      justify="space-between" // Add it here :)
                      container
                      spacing={24}
                    >
                      <Grid item>
                        <Link to="/forgot-password">Forgot Password?</Link>{" "}
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
                      color="primary"
                      size="lg"
                    >
                      Sign In
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
