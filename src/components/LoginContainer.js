import React from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { loginUser } from "../redux";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
// import { red } from "@material-ui/core/colors";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
// import SignupContainer from "./SignupContainer";
// import HomeContainer from "./HomeContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
      // width: 200,
      // padding: "0.5rem",
    },
    paddingTop: "2rem",
    paddingBottom: "2rem",
    backgroundColor: "#fafafa",

    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: " #ededed",
    // padding: "5rem",
  },
}));
function LoginContainer(props) {
  const classes = useStyles();
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 500);
  // }, []);
  const initialValues = {
    Email: "",
    Password: "",
  };
  const validationSchema = Yup.object({
    Email: Yup.string().email().required("Enter the Email"),
    Password: Yup.string().required("No password provided."),
  });
  // function handlechanges() {
  //   return <>{loading === false ? <p>logging</p> : <p>logged..</p>}</>;
  // }
  const onSubmit = (values, onSubmitProps) => {
    console.log("delay executed");

    console.log("Form data dddddddddddddddddddddddddddddd", values);
    onSubmitProps.resetForm();
    props.loginUser(values.Email, values.Password);
    // handlechanges;
    // props.addPost(values.name);
  };
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Paper className={classes.paper} elevation={2}>
          <Typography>Login</Typography>
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
                          label="Email"
                          name="Email"
                          size="medium"
                          id="standard-size-medium"
                          InputProps={{ notched: "true" }}
                        />
                      </Col>
                      <Col>
                        <Field
                          component={TextField}
                          label="Password"
                          type="password"
                          name="Password"
                          size="medium"
                          id="standard-size-medium"
                          InputProps={{ notched: "true" }}
                        />
                      </Col>
                      <Typography align="left" variant="h6" noWrap>
                        <h6>
                          Don't have an account?
                          <Link to="/signup">
                            <p>Sign Up</p>
                          </Link>
                        </h6>
                      </Typography>
                      {/* <Route path="/" component={SignupContainer} /> */}

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
  );
}

const mapStatetoProps = (state) => {
  return {
    username: state.user.username,
    password: state.user.password,
    msg: state.user.msg,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    loginUser: function (username, password) {
      dispatch(loginUser(username, password));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(LoginContainer);
