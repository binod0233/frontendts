// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchToken, updateToken } from "../redux/action/tokenAction";
// import { addCtoken, fetchCtoken } from "../redux/action/customerAction";
// import TimeComponent from "./TimeComponent";
// import { makeStyles } from "@material-ui/core/styles";
// import * as Yup from "yup";
// import FormikControl from "../formik/FormikControl";
// import { Grid, Paper, Typography, Button, Select } from "@material-ui/core";
// import { Formik, Form, Field } from "formik";
// import MenuItem from "@material-ui/core/MenuItem";
// import InputLabel from "@material-ui/core/InputLabel";
// import FormControl from "@material-ui/core/FormControl";
// import CustomerContainer from "./CustomerContainer";

// export const UserContext = React.createContext();
// export const DataContext = React.createContext();

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));
// const CounterContainer = (props) => {
//   const classes = useStyles();
//   const [age, setAge] = useState("");
//   const [totalToken, settotalToken] = useState(0);
//   const [yourToken, setYourtoken] = useState(0);
//   const [bank, setBank] = useState("");

//   var random = age;

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchToken());
//     const interval = setInterval(() => {
//       dispatch(fetchToken());
//     }, 900000);

//     return () => clearInterval(interval);
//   }, []);
//   useEffect(() => {
//     dispatch(fetchCtoken());
//   }, []);

//   const allToken = useSelector((state) => state.token.allTokens);
//   const allCtoken = useSelector((state) => state.customer.allCtokens);

//   console.log("your token", allCtoken);

//   var Ctoken = allCtoken.map((val) => {
//     if (val.userId === props.userDetail) {
//       var val = val.yourToken;
//       return val;
//     }
//   });

//   var yToken = Ctoken.filter((f) => {
//     return f != null;
//   });

//   if (yToken[0] === undefined) {
//     yToken = "user not found";
//   } else yToken = yToken[0];
//   console.log("finding.....", yToken);

//   if (yToken === "user not found") {
//     var toDo = allToken.map((val, i) => {
//       const dropdownOptions = [
//         { key: "Select an option", value: "" },
//         { key: "Baneshwor", value: "Baneshwor" },
//         { key: "Durbar Marga", value: "Durbar Marga" },
//         { key: "Teku", value: "Teku" },
//       ];
//       const initialValues = {
//         // bank: "",
//         // last: "",
//         selectOption: "",
//       };

//       const validationSchema = Yup.object({
//         // bank: Yup.string().required("Enter the name"),
//         selectOption: Yup.string().required("Required"),
//         // last: Yup.string(),
//       });
//       const onSubmit = (values, onSubmitProps) => {
//         console.log("Form data vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv", values);
//         onSubmitProps.resetForm();
//         // console.log("Saved data", JSON.parse(JSON.stringify(values)));

//         var totalToken = val.totalToken + 1;
//         var yourToken = totalToken;
//         settotalToken(totalToken);
//         props.updateToken(totalToken);
//         setYourtoken(yourToken);
//         // var bank = age;
//         // setBank(bank);
//         props.addCtoken(yourToken, props.userDetail, values.selectOption);
//       };
//       return (
//         <>
//           <Grid container spacing={3} alignItems="stretch" key={i}>
//             <Grid item xs={12}>
//               <Paper className={classes.paper}>
//                 <Typography variant="h3" component="h2">
//                   Welcome to the token system
//                 </Typography>
//               </Paper>
//             </Grid>
//             <Grid item xs={6}>
//               <Paper className={classes.paper}>
//                 <Typography variant="h5" component="h2">
//                   Total token={val.totalToken}
//                 </Typography>
//               </Paper>
//             </Grid>
//             <Grid item xs={6}>
//               <Paper className={classes.paper}>
//                 <Typography variant="h5" component="h2">
//                   Current token={val.currentToken}
//                 </Typography>
//               </Paper>
//             </Grid>
//             <Grid item xs={12}>
//               <Paper className={classes.paper}>
//                 <Formik
//                   initialValues={initialValues}
//                   validationSchema={validationSchema}
//                   onSubmit={onSubmit}
//                 >
//                   {(formik) => {
//                     return (
//                       <Form>
//                         <row>
//                           <col></col>
//                           <FormikControl
//                             control="select"
//                             label="Select a topic"
//                             name="selectOption"
//                             options={dropdownOptions}
//                           />
//                           <Button
//                             variant="contained"
//                             color="primary"
//                             type="submit"
//                             disabled={!formik.isValid}
//                           >
//                             Submit
//                           </Button>
//                         </row>
//                       </Form>
//                     );
//                   }}
//                 </Formik>
//               </Paper>
//             </Grid>
//           </Grid>
//         </>
//       );
//     });
//   } else {
//     toDo = allToken.map((val, i) => (
//       <>
//         <Grid container spacing={3} alignItems="stretch" key={i}>
//           <Grid item xs={6}>
//             <Paper className={classes.paper}>
//               <Typography variant="h5" component="h2">
//                 Total token={val.totalToken}
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={6}>
//             <Paper className={classes.paper}>
//               <Typography variant="h5" component="h2">
//                 Current token={val.currentToken}
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={6}>
//             <Paper className={classes.paper}>
//               <Typography variant="h5" component="h2">
//                 yout token={yToken}
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={6}>
//             <Paper className={classes.paper}>
//               <Typography variant="h5" component="h2">
//                 <UserContext.Provider
//                   value={-val.totalToken + val.currentToken}
//                 >
//                   <TimeComponent />
//                 </UserContext.Provider>
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={6}>
//             <Paper className={classes.paper}>
//               <Typography variant="h5" component="h2">
//                 branch name={" "}
//                 {allCtoken.map((val) => {
//                   if (val.userId === props.userDetail) {
//                     return val.bankName;
//                   }
//                 })}
//               </Typography>
//             </Paper>
//           </Grid>
//         </Grid>
//       </>
//     ));
//   }
//   return (
//     <>
//       <div className={classes.root}>
//         <div>
//           {allToken.map((val, i) => (
//             <>
//               <Grid container spacing={3} alignItems="stretch" key={i}>
//                 <Grid item xs={6}>
//                   <Paper className={classes.paper}>
//                     <Typography variant="h5" component="h2">
//                       Total token={val.totalToken}
//                     </Typography>
//                   </Paper>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Paper className={classes.paper}>
//                     <Typography variant="h5" component="h2">
//                       Current token={val.currentToken}
//                     </Typography>
//                   </Paper>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Paper className={classes.paper}>
//                     <Typography variant="h5" component="h2">
//                       yout token={yToken}
//                     </Typography>
//                   </Paper>
//                 </Grid>

//                 <Grid item xs={6}>
//                   <Paper className={classes.paper}>
//                     <Typography variant="h5" component="h2">
//                       branch name={" "}
//                       {allCtoken.map((val) => {
//                         if (val.userId === props.userDetail) {
//                           return val.bankName;
//                         }
//                       })}
//                     </Typography>
//                   </Paper>
//                 </Grid>
//               </Grid>
//             </>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };
// const mapStatetoProps = (state) => {
//   return {
//     totalToken: state.token.totalToken,
//     userDetail: state.user.userDetails.id,
//   };
// };

// const mapDispatchtoProps = (dispatch) => {
//   return {
//     updateToken: function (totalToken) {
//       dispatch(updateToken(totalToken));
//     },
//     addCtoken: function (yourToken, userDetail, bankName) {
//       dispatch(addCtoken(yourToken, userDetail, bankName));
//     },
//   };
// };

// export default connect(mapStatetoProps, mapDispatchtoProps)(CounterContainer);
