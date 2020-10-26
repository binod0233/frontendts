import React, { useState } from "react";
import {
  FormControl,
  TextField,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@material-ui/core";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { signupUser } from "../redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function SignupContainer(props) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="my-input">username</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            defaultValue={props.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            defaultValue={props.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">password</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            defaultValue={props.password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <p>
          <a href="/">login</a>
        </p>
        <Button
          variant="primary"
          onClick={() => props.signupUser(username, email, password)}
        >
          SIGNUP
        </Button>
      </form>
    </>
    // <Container>
    //   <Row>
    //     <Col>
    //       <h1>Signup</h1>
    //       <Form className="form">
    //         <p>{props.msg}</p>
    //         <Form.Group controlId="formCategory1">
    //           <Form.Label>Username</Form.Label>
    //           <Form.Control
    //             type="text"
    //             defaultValue={props.username}
    //             onChange={(e) => setUsername(e.target.value)}
    //           />
    //         </Form.Group>
    //         <Form.Group controlId="formCategory2">
    //           <Form.Label>Email</Form.Label>
    //           <Form.Control
    //             type="email"
    //             defaultValue={props.email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </Form.Group>
    //         <Form.Group controlId="formCategory3">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control
    //             type="password"
    //             defaultValue={props.password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </Form.Group>
    //         <Form.Group controlId="formCategory4">
    //           <Form.Label>Confirm Password</Form.Label>
    //           <Form.Control
    //             type="password"
    //             defaultValue={props.confirmPassword}
    //             onChange={(e) => setConfirmPassword(e.target.value)}
    //           />
    //         </Form.Group>
    //         <p>
    //           <a href="/">login</a>
    //         </p>
    //         <Button
    //           variant="primary"
    //           onClick={() =>
    //             props.signupUser(username, email, password)
    //           }
    //         >
    //           SIGNUP
    //         </Button>
    //       </Form>
    //     </Col>
    //   </Row>
    // </Container>
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
    signupUser: function (username, email, password) {
      dispatch(signupUser(username, email, password));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(SignupContainer);
