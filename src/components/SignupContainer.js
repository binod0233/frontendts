import React, { useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { signupUser } from "../redux";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import { Button, Paper, Grid, Typography } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Link, Route } from "react-router-dom";

import * as Yup from "yup";
import { Row, Col } from "react-bootstrap";
import HomeContainer from "./HomeContainer";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   "& > *": {
  //     margin: theme.spacing(1),
  //     // width: "25ch",
  //   },
  // },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function SignupContainer(props) {
  const classes = useStyles();
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  const initialValues = {
    userName: "",
    password: "",
    email: "",
    passwordConfirmation: "",
  };
  const validationSchema = Yup.object({
    userName: Yup.string().required("Enter the name"),
    email: Yup.string().email().required("Enter the email"),
    password: Yup.string().required("No password provided."),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });
  const onSubmit = (values, onSubmitProps) => {
    // console.log("Form data dddddddddddddddddddddddddddddd", values);
    onSubmitProps.resetForm();
    props.signupUser(values.userName, values.email, values.password);
    // props.addPost(values.name);
  };
  return (
    <>
      <div className={classes.root}>
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          {/* <Route path="/" component={HomeContainer} /> */}
          <HomeContainer />
          <Grid item xs>
            <Paper className={classes.paper} elevation={2}>
              <Typography>Signup</Typography>
              <Typography>{props.msg}</Typography>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => {
                  return (
                    <>
                      <Form>
                        <Row>
                          <Col>
                            <Field
                              component={TextField}
                              label="userName"
                              name="userName"
                              size="small"
                              id="standard-size-small"
                              InputProps={{ notched: true }}
                            />
                          </Col>
                          <Col>
                            <Field
                              component={TextField}
                              label="email"
                              name="email"
                              size="small"
                              id="standard-size-small"
                              InputProps={{ notched: true }}
                            />
                          </Col>
                          <Col>
                            <Field
                              component={TextField}
                              label="password"
                              type="password"
                              name="password"
                              size="small"
                              id="standard-size-small"
                              InputProps={{ notched: true }}
                            />
                          </Col>
                          <Col>
                            <Field
                              className={classes.paper}
                              component={TextField}
                              label="conformpassword"
                              type="password"
                              name="passwordConfirmation"
                              size="small"
                              id="standard-size-small"
                              InputProps={{ notched: true }}
                            />
                          </Col>
                          <Typography align="left" variant="h6" noWrap>
                            <Link to="/">Login</Link>
                          </Typography>
                          <Col>
                            <Button
                              type="submit"
                              disabled={!formik.isValid}
                              variant="contained"
                              color="primary"
                            >
                              Submit
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </>
                  );
                }}
              </Formik>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

const mapStatetoProps = (state) => {
  return {
    username: state.user.username,
    email: state.user.email,
    password: state.user.password,
    msg: state.user.msg,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    signupUser: function (userName, email, password) {
      dispatch(signupUser(userName, email, password));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(SignupContainer);

//  {/* <form className={classes.root} noValidate autoComplete="off">
//         <FormControl>
//           <InputLabel htmlFor="my-input">username</InputLabel>
//           <Input
//             id="my-input"
//             aria-describedby="my-helper-text"
//             defaultValue={props.username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <FormHelperText id="my-helper-text">
//             We'll never share your email.
//           </FormHelperText>
//         </FormControl>
//         <FormControl>
//           <InputLabel htmlFor="my-input">Email address</InputLabel>
//           <Input
//             id="my-input"
//             aria-describedby="my-helper-text"
//             defaultValue={props.email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <FormHelperText id="my-helper-text">
//             We'll never share your email.
//           </FormHelperText>
//         </FormControl>
//         <FormControl>
//           <InputLabel htmlFor="my-input">password</InputLabel>
//           <Input
//             id="my-input"
//             aria-describedby="my-helper-text"
//             defaultValue={props.password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <FormHelperText id="my-helper-text">
//             We'll never share your email.
//           </FormHelperText>
//         </FormControl>
//         <p>
//           <a href="/">login</a>
//         </p>
//         <Button
//           variant="primary"
//           onClick={() => props.signupUser(username, email, password)}
//         >
//           SIGNUP
//         </Button>
//       </form> */}
