import React, { useEffect, useState } from "react";
import { useDispatch, batch } from "react-redux";

import DatePicker from "react-datepicker";
import ko from "date-fns/esm/locale/ko/index.js";
import "react-datepicker/dist/react-datepicker.css";
import "./CreateFormCalender.css";

import { changeField } from "../../../../../redux/modules/createFormSlice";

const Calender = ({ setIsToggleOn, startDateToggleHandler }) => {
  const dispatch = useDispatch();

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
      minDate={new Date()}
      locale={ko}
      calendarClassName=""
    />
  );
};

export default Calender;
