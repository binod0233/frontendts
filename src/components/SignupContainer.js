import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { signupUser } from "../redux";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import { Button, Paper, Grid, Typography } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Link } from "react-router-dom";

import * as Yup from "yup";
import { Row, Col } from "react-bootstrap";
// import HomeContainer from "./HomeContainer";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   "& > *": {
  //     margin: theme.spacing(1),
  //     // width: "25ch",
  //   },
  // },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      // width: 200,
      // padding: "0.5rem",
    },
    // padding: "4rem",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    backgroundColor: "#fafafa",

    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: " #ededed",
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
        <Grid container direction="row" justify="center" alignItems="center">
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
                            label="Username"
                            name="userName"
                            size="medium"
                            id="standard-size-small"
                            InputProps={{ notched: "true" }}
                          />
                        </Col>
                        <Col>
                          <Field
                            component={TextField}
                            label="Email"
                            name="email"
                            size="medium"
                            id="standard-size-small"
                            InputProps={{ notched: "true" }}
                          />
                        </Col>
                        <Col>
                          <Field
                            component={TextField}
                            label="Password"
                            type="password"
                            name="password"
                            size="small"
                            id="standard-size-small"
                            InputProps={{ notched: "true" }}
                          />
                        </Col>
                        <Col>
                          <Field
                            component={TextField}
                            label="Conformpassword"
                            type="password"
                            name="passwordConfirmation"
                            size="small"
                            id="standard-size-small"
                            InputProps={{ notched: "true" }}
                          />
                        </Col>
                        <Typography align="left" variant="h6" noWrap>
                          <h6>
                            Already have an account?
                            <Link to="/login">
                              <p>Log in</p>
                            </Link>
                          </h6>
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
