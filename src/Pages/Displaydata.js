import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
const useStyles = makeStyles({
  root: {
    marginTop: "70px",
    margin: "20px",
    display: "inline-block",
    height: "100%",
  },
  head: {
    color: "#583c87",
  },
  rootcard: {
    minHeight: 330,
    maxWidth: 370,
    background:
      "linear-gradient(159deg, rgba(255,255,255,1) 0%, rgba(242,241,255,1) 44%, rgba(209,207,240,1) 66%)",
  },
  title: {
    fontSize: 13,
  },

  bg: {
    display: "flex",
    flexDirection: "row",
  },
  badge: {
    fontSize: 14,
    margin: "3px",
    background: "#aed581",
    border: "1px solid green",
    padding: "3px",
    borderRadius: "5px",
  },
});

const Displaydata = ({ items }) => {
  const classes = useStyles();

  const sessions = items.sessions;

  return (
    <div className={classes.root}>
      <Card className={classes.rootcard}>
        <CardHeader
          title={items.address}
          subheader={items.fee_type}
          className={classes.head}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            From {items.from} to {items.to}
          </Typography>
          {sessions.map((session) => {
            return (
              <div className={classes.bg}>
                <div className={classes.badge} color="textSecondary">
                  Date: {session.date}
                </div>
                <div className={classes.badge} color="textSecondary">
                  Dose1: {session.available_capacity_dose1}
                </div>
                <div className={classes.badge} color="textSecondary">
                  Dose2: {session.available_capacity_dose2}
                </div>
                <div className={classes.badge} color="textSecondary">
                  Min age: {session.min_age_limit}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};
export default Displaydata;
