import React, { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CreateFormCalender.css";
import ko from "date-fns/esm/locale/ko/index.js";
import { useDispatch, batch } from "react-redux";
import { changeField } from "../../../../../redux/modules/createFormSlice";

const Calender = ({ setIsToggleOn, startDateToggleHandler }) => {
  const dispatch = useDispatch();

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

  console.log(ChangedStartDate, ChangedEndDate);

  useEffect(() => {
    batch(() => {
      dispatch(
        changeField({
          form: "formList",
          key: "startedAt",
          value: ChangedStartDate,
        })
      );
      dispatch(
        changeField({
          form: "formList",
          key: "endedAt",
          value: ChangedEndDate,
        })
      );
    });
  }, [endDate]);

  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
      locale={ko}
      calendarClassName=""
    />
  );
};

export default Calender;
