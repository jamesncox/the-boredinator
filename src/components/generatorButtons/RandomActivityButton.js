import React from "react";
import { connect } from "react-redux";
import { SET_RANDOM_ACTIVITY_ALL } from "../../actionTypes";

function RandomActivityButton(props) {
  const handleClick = () => {
    props.setRandomActivityFromAll();
  };

  return (
    <button className="random-activity-btn" onClick={(e) => handleClick(e)}>
      Show Me A Random Activity
    </button>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setRandomActivityFromAll: () => dispatch({ type: SET_RANDOM_ACTIVITY_ALL }),
});

export default connect(null, mapDispatchToProps)(RandomActivityButton);
