import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


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
    <Box display="flex" justifyContent="center" sx={{height:"100vh"}} alignItems="center">
      <Paper elevation={3} >
    <Box >
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
      <Box m={3} display="flex" justifyContent="flex-end">
      <Button  variant="contained" color="primary">
          submit
      </Button>
      </Box>
    </form>
    </Box>
    </Paper>
  </Box>
  
  );
}
