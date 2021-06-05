import React from "react";
import "./Style.css";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import vaccine from "./v1.png";

const Home = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: "50px",
      paddingRight: "80px",
      width: "100%",
      height: "100%",
    },
    button: {
      width: "180px",
      height: "0px",
      paddingTop: "25px",
      paddingBottom: "30px",
      background: "black",
      borderRadius: "10px",
      border: "0.01em ",
      fontSize: "0.8rem",
      color: "#ffffff",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <div className="layout">
        <div className="form-style">
          <h1 className="heading">Track Vaccine Availability</h1>
          <div className="logo">
            <img alt="covin" width="200px" height="210px" src={vaccine} />
          </div>
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
            className={classes.root}
            spacing={3}
          >
            <Grid item lg={12}>
              <Link to="/pincode">
                <Button className={classes.button}>SEARCH BY PINCODE</Button>
              </Link>
            </Grid>
            <Grid item lg={12}>
              <Link to="/district">
                <Button className={classes.button}> SEARCH BY DISTRICT</Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home;
