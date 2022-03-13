import React from "react";
import classes from "../styles/error.module.css";
function Error() {
  return (
    <div className={classes.error_500}>
      <div className={classes.image}>
        <img src="https://i.imgur.com/qIufhof.png" alt="error_image" />
      </div>
      <h1>500 Internal server error</h1>
      <p>We are currently trying to fix the problem.</p>
    </div>
  );
}

export default Error;
