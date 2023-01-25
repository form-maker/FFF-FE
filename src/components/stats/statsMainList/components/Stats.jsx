import React from "react";

import LongDescriptiveStats from "./typeOfStats/LongDescriptiveStats";
import MultiChoiceStats from "./typeOfStats/MultiChoiceStats";
import RankStats from "./typeOfStats/RankStats";
import ScoreStats from "./typeOfStats/ScoreStats";
import ShortDescriptiveStats from "./typeOfStats/ShortDescriptiveStats";
import SingleChoiceStats from "./typeOfStats/SingleChoiceStats";
import SlideStats from "./typeOfStats/SlideStats";
import StarStats from "./typeOfStats/StarStats";

const Stats = ({ stats }) => {
  return (
    <>
      {stats.questionType === "MULTIPLE_CHOICE" && (
        <MultiChoiceStats stats={stats} />
      )}
      {stats.questionType === "SINGLE_CHOICE" && (
        <SingleChoiceStats stats={stats} />
      )}
      {stats.questionType === "SLIDE" && <SlideStats stats={stats} />}
      {stats.questionType === "RANK" && <RankStats stats={stats} />}
      {stats.questionType === "SHORT_DESCRIPTIVE" && (
        <ShortDescriptiveStats stats={stats} />
      )}
      {stats.questionType === "LONG_DESCRIPTIVE" && (
        <LongDescriptiveStats stats={stats} />
      )}
      {stats.questionType === "STAR" && <StarStats stats={stats} />}
      {stats.questionType === "SCORE" && <ScoreStats stats={stats} />}
    </>
  );
};

export default Stats;
