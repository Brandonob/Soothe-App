import React from "react";
import moment from "moment";

const Days = () => {
  let today = moment().format("ddd, MMMM Do YYYY");
  
    return (
      <p key={today} >
        {today}
      </p>
  );
};

export default Days;