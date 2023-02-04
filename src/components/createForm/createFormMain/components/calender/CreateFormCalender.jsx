import React, { useEffect, useState } from "react";
import { useDispatch, batch } from "react-redux";

import DatePicker from "react-datepicker";
import ko from "date-fns/esm/locale/ko/index.js";
import "react-datepicker/dist/react-datepicker.css";
import "./CreateFormCalender.css";

import { changeField } from "../../../../../redux/modules/createFormSlice";
import { useSelector } from "react-redux";

const Calender = ({ setIsToggleOn, startDateToggleHandler }) => {
  const dispatch = useDispatch();

  const createForm = useSelector((state) => state.createForm);

  console.log(createForm);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const ChangedStartDate = startDate?.toISOString().slice(0, 10);
  const ChangedEndDate = endDate?.toISOString().slice(0, 10);

  useEffect(() => {
    dispatch(
      changeField({
        form: "formList",
        key: "startedAt",
        value: ChangedStartDate,
      })
    );
  }, [startDate]);

  useEffect(() => {
    dispatch(
      changeField({
        form: "formList",
        key: "endedAt",
        value: ChangedEndDate,
      })
    );
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
