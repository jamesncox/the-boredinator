import React from "react";
import { connect } from "react-redux";
import HomeButton from "./HomeButton";
import BottomHomeButton from "./BottomHomeButton";
import CouplesIndex from "../categoriesIndex/CouplesIndex";
import CraftsIndex from "../categoriesIndex/CraftsIndex";
import FamilyIndex from "../categoriesIndex/FamilyIndex";
import FoodIndex from "../categoriesIndex/FoodIndex";
import InsideIndex from "../categoriesIndex/InsideIndex";
import OutsideIndex from "../categoriesIndex/OutsideIndex";
import ProjectsIndex from "../categoriesIndex/ProjectsIndex";
import SoloIndex from "../categoriesIndex/SoloIndex";
import WellnessIndex from "../categoriesIndex/WellnessIndex";

function IndexPage(props) {
  return (
    <>
      <p className="index-title">ACTIVITIES</p>
      <HomeButton />

      <CouplesIndex />
      <CraftsIndex />
      <FamilyIndex />
      <FoodIndex />
      <InsideIndex />
      <OutsideIndex />
      <ProjectsIndex />
      <SoloIndex />
      <WellnessIndex />

      <BottomHomeButton />
    </>
  );
}
// }

const mapStateToProps = (state) => ({
  activity: state.activities.activity,
});

export default connect(mapStateToProps)(IndexPage);
