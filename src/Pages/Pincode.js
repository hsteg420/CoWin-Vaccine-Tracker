import React, { useState } from "react";
import { FormControl, TextField, Button } from "@material-ui/core";
import "./Pincode.css";
import Displaydata from "./Displaydata";

const Pincode = () => {
  const [content, setContent] = useState([]);
  const [pincode, setPincode] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    const date = e.target.value;
    const split = date.split("-");
    const convertedDate = split[2] + "-" + split[1] + "-" + split[0];
    setSelectedDate(convertedDate);
  };

  const get_pin = async () => {
    const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${selectedDate}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    setContent(data.centers);
  };

  return (
    <>
      <div className="pincode">
        <div>
          <FormControl
            className="form-data"
            style={{
              display: "inline-block",
              padding: "30px",
            }}
          >
            <TextField
              id="pincode"
              label=" Enter Pincode"
              name="pincode"
              type="number"
              variant="outlined"
              onChange={(e) => {
                setPincode(e.target.value);
              }}
            />
            <TextField
              style={{
                marginLeft: "15px",
              }}
              onChange={handleDateChange}
              type="date"
              variant="outlined"
            />
            <Button
              style={{
                marginTop: "10px",
                marginLeft: "15px",
              }}
              className="btn"
              variant="contained"
              color="primary"
              onClick={get_pin}
            >
              Search
            </Button>
          </FormControl>
        </div>
      </div>
      {content.length === 0 ? (
        <p className="not">Data Not Found</p>
      ) : (
        content.map((items) => {
          return <Displaydata items={items} />;
        })
      )}
    </>
  );
};
export default Pincode;
