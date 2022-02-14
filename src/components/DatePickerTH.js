import React from "react";
import DatePicker from "react-multi-date-picker";
import thai from "../helper/Thai";
import thai_th from "../helper/ThaiTH";

export default function DatePickerTH({ placeholder, ...porps }) {
  return (
    <>
      <DatePicker
        showOtherDays
        format="DD/MM/YYYY"
        locale={thai_th}
        calendar={thai}
        {...porps}
        containerStyle={{
          width: "100%",
        }}
        render={
          <CustomInput
            placeholder={placeholder}
            inputClass={porps.inputClass}
            disabled={porps.disabled}
          />
        }
      />
      <div className="flex justify-end m-2 mr-3 -mt-7">
        <SVGPDatePicker />
      </div>
    </>
  );
}

function CustomInput({
  openCalendar,
  value,
  handleValueChange,
  placeholder,
  inputClass,
  disabled,
}) {
  return (
    <input
      disabled={disabled ? true : false}
      className={"field-input" + (inputClass ? inputClass : "")}
      onFocus={openCalendar}
      value={value}
      onChange={handleValueChange}
      placeholder={placeholder === undefined ? "" : placeholder}
    />
  );
}

function SVGPDatePicker() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-calendar-event"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#3b3b3b"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <line x1="16" y1="3" x2="16" y2="7" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="4" y1="11" x2="20" y2="11" />
      <rect x="8" y="15" width="2" height="2" />
    </svg>
  );
}
