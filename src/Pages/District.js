import React, { useState } from "react";
import { FormControl, Button, TextField } from "@material-ui/core";
import "./Pincode.css";
import Displaydata from "./Displaydata";

const District = () => {
  const [content, setContent] = useState([]);
  const [states, setStates] = useState([]);
  const [stateID, setStateID] = useState("");
  const [districts, setDistricts] = useState([]);
  const [districtID, setDistrictID] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (e) => {
    const date = e.target.value;
    const split = date.split("-");
    const convertedDate = split[2] + "-" + split[1] + "-" + split[0];
    setSelectedDate(convertedDate);
  };

  const get_state = async () => {
    const url = `https://cdn-api.co-vin.in/api/v2/admin/location/states`;
    const response = await fetch(url);
    const data = await response.json();
    setStates(data.states);
  };

  const get_district = async () => {
    const url = `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateID}`;
    const response = await fetch(url);
    const data = await response.json();
    setDistricts(data.districts);
  };
  const district_api = async () => {
    const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtID}&date=${selectedDate}`;
    const response = await fetch(url);
    const data = await response.json();
    setContent(data.centers);
  };

  return (
    <>
      <div className="pincode">
        <div>
          <FormControl
            className="form-design"
            style={{
              display: "inline-block",
              padding: "20px",
            }}
          >
            <TextField
              select
              label="State"
              value={stateID}
              onClick={get_state}
              style={{
                width: "15vw",
              }}
              onChange={(e) => {
                setStateID(e.target.value);
              }}
            >
              <option>Select State</option>
              {states.map((stateID) => (
                <option value={stateID.state_id}>{stateID.state_name}</option>
              ))}
            </TextField>

            <TextField
              select
              label="District"
              value={districtID}
              onClick={get_district}
              style={{
                width: "15vw",
                marginBottom: "10px",
                marginLeft: "10px",
              }}
              onChange={(e) => {
                setDistrictID(e.target.value);
              }}
            >
              <option>Select District</option>
              {districts.map((districtID) => (
                <option value={districtID.district_id}>
                  {districtID.district_name}
                </option>
              ))}
            </TextField>

            <TextField
              style={{
                width: "15vw",
                marginLeft: "10px",
              }}
              onChange={handleDateChange}
              type="date"
              variant="outlined"
            />
            <Button
              className="btn"
              variant="contained"
              color="primary"
              onClick={district_api}
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

export default District;
