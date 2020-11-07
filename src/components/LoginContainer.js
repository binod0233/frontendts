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
import HomeContainer from "./HomeContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
      width: 200,
      // padding: "0.5rem",
    },
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: " #e6f5ff",
  },
}));
function LoginContainer(props) {
  const classes = useStyles();
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 500);
  // }, []);
  const initialValues = {
    UserName: "",
    Password: "",
  };
  const validationSchema = Yup.object({
    UserName: Yup.string().email().required("Enter the name"),
    Password: Yup.string().required("No password provided."),
  });
  // function handlechanges() {
  //   return <>{loading === false ? <p>logging</p> : <p>logged..</p>}</>;
  // }
  const onSubmit = (values, onSubmitProps) => {
    console.log("Form data dddddddddddddddddddddddddddddd", values);
    onSubmitProps.resetForm();
    props.loginUser(values.UserName, values.Password);
    // handlechanges;
    // props.addPost(values.name);
  };
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        <HomeContainer />
        <Grid item xs>
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
                            label="UserName"
                            name="UserName"
                            size="medium"
                            id="standard-size-small"
                            InputProps={{ notched: true }}
                          />
                        </Col>
                        <Col>
                          <Field
                            component={TextField}
                            label="Password"
                            type="password"
                            name="Password"
                            size="medium"
                            id="standard-size-small"
                            InputProps={{ notched: true }}
                          />
                        </Col>
                        <Typography align="left" variant="h6" noWrap>
                          <Link to="/signup">Create new account</Link>
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
      </Grid>
      {/* <Row>
        <Col>
          <h1>Login</h1>
          <Form className="form">
            <p>{props.msg}</p>
            <Form.Group controlId="formCategory2">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                defaultValue={props.email}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formCategory3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                defaultValue={props.password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <p>
              <a href="/signup">Create new account</a>
            </p>
            <Button
              variant="primary"
              onClick={() => props.loginUser(username, password)}
            >
              LOGIN
            </Button>
          </Form>
        </Col>
      </Row> */}
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

// import * as Yup from 'yup';

// validationSchema: Yup.object({
//   password: Yup.string().required('Password is required'),
//   passwordConfirmation: Yup.string()
//      .oneOf([Yup.ref('password'), null], 'Passwords must match')
// });
