import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import FormControl from "@material-ui/core/FormControl";
// import MenuItem from "@material-ui/core/MenuItem";
// import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function Select(props) {
  const classes = useStyles();
  const { label, name, options, ...rest } = props;
  return (
    <FormControl className={classes.formControl}>
      {" "}
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </FormControl>
  );
}

export default Select;
