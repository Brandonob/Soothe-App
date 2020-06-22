import React from "react";
import moment from "moment";

const Days = () => {
  let today = moment().format("ddd").toUpperCase();
  
    return (
      <p key={today} >
        {today}
      </p>
  );
};

export default Days;