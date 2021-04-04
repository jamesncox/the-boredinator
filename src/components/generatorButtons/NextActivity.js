import { render } from "@testing-library/react";
import React from "react";
import { connect } from "react-redux";
import { NEXT_ACTIVITY } from "../../actionTypes";

function NextActivity(props) {
  const handleClick = () => {
    props.nextActivity();
  };

  return (
    <button className="next-btn" onClick={(e) => handleClick(e)}>
      Next Activity
    </button>
  );
}

const mapDispatchToProps = (dispatch) => ({
  nextActivity: () => dispatch({ type: NEXT_ACTIVITY }),
});

export default connect(null, mapDispatchToProps)(NextActivity);
