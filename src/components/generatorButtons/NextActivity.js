import React from "react";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { connect } from "react-redux";
import { NEXT_ACTIVITY } from "../../actionTypes";

function NextActivity(props) {
  const shuffleActivitiesToGetOne = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a.slice(0, 1);
  };

  const handleClick = () => {
    const nextActivityByCategory = shuffleActivitiesToGetOne(
      props.activitiesBySelectedCategory
    );
    props.nextActivity(nextActivityByCategory);
  };

  return (
    <button className="next-btn" onClick={(e) => handleClick(e)}>
      Next Activity
    </button>
  );
}

const mapStateToProps = (state) => ({
  activitiesBySelectedCategory: state.activities.activitiesBySelectedCategory,
});

const mapDispatchToProps = (dispatch) => ({
  nextActivity: (activity) =>
    dispatch({ type: NEXT_ACTIVITY, payload: activity }),
});

export default connect(mapStateToProps, mapDispatchToProps)(NextActivity);
