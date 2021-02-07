import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles(styles);

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const classes = useStyles();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/login-page");
    } catch {
      setError("Failed to create an account");
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
                    <TextField
                      id="standard-textarea"
                      type="Password"
                      inputRef={passwordConfirmRef}
                      label="Confirm Password"
                      placeholder="Confirm Password"
                      className="Textarea"
                    />

                    <Link to="/login-page">Sign In</Link>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      disabled={loading}
                      type="submit"
                      simple
                      color="primary"
                      size="lg"
                    >
                      Sign Up
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>

    // <>
    //   <Card>
    //     <h2 className="text-center mb-4">Sign Up</h2>
    //     {error}
    //     <form onSubmit={handleSubmit}>
    //       <input type="email" ref={emailRef} required />
    //       <input type="password" ref={passwordRef} required />
    //       <input type="password" ref={passwordConfirmRef} required />
    //       <Button disabled={loading} className="w-100" type="submit">
    //         Sign Up
    //       </Button>
    //     </form>
    //   </Card>
    //   <div className="w-100 text-center mt-2">
    //     Already have an account? <Link to="/login">Log In</Link>
    //   </div>
    // </>
  );
}
