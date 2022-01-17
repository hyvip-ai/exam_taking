import React from "react";
import classes from "../styles/test.module.css";

function Navigation({ setVisibleQues, max }) {
  const increaseHandler = () => {
    setVisibleQues((prev) => {
      return (prev % 10) + 1;
    });
  };
  const decreaseHandler = () => {
      setVisibleQues((prev)=>{
          if(prev===1){
              return max
          }
          return prev-1
      })
  };
  return (
    <div className={classes.navigation}>
      <button onClick={decreaseHandler}>Previous</button>
      <button onClick={increaseHandler}>Next</button>
    </div>
  );
}

export default Navigation;
