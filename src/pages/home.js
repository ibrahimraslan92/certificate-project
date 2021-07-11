import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(5),
      width: 200,
    },
  },
}));


export default function Home() {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center" m={1} p={1}  bgcolor="background.paper">
    <Box p={1} bgcolor="grey.300">
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="outlined"
        />
      </div>
      <div>
      <button type="button" className="btn btn-outline-primary">Primary</button>
      </div>
    </form>
    </Box>
  </Box>
  
  );
}
