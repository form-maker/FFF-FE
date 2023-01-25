import React, { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calender.module.css";
import ko from "date-fns/esm/locale/ko/index.js";
import { useDispatch, useSelector } from "react-redux";
import { __getStats } from "../../../../redux/modules/statsSlice";
import { useParams } from "react-router-dom";

const Calender = ({ setIsToggleOn }) => {
  const { surveyId } = useParams();
  const dispatch = useDispatch();
  const statsList = useSelector((state) => state.stats.stats);

  let minDate = new Date(statsList?.startedAt);
  let maxDate = new Date(statsList?.endedAt);

  // 달력 날짜 변경시 기준점이 되는 날짜
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const ChangedStartDate = startDate?.toISOString().slice(0, 10);
  const ChangedEndDate = endDate?.toISOString().slice(0, 10);

  useEffect(() => {
    dispatch(
      __getStats({
        surveyId: surveyId,
        start: ChangedStartDate,
        end: ChangedEndDate,
      })
    );
  }, [dispatch, surveyId, ChangedEndDate]);

  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      minDate={minDate}
      maxDate={maxDate}
      selectsRange
      inline
      locale={ko}
      calendarClassName=""
    />
  );
};

export default Calender;
