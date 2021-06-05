import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            CoWin Vaccine Tracker
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => window.open("https://www.cowin.gov.in/")}
          >
            Book Slots
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
