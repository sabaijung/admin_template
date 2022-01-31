import React from "react";
import { ErrorMessage, useField } from "formik";
import Select from "react-select";
export const TextSelect = ({ title, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const { isValid } = props;
  const customStylesError = {
    control: (base, state) => ({
      ...base,
      height: "36px",
      minHeight: "36px",

      // state.isFocused can display different borderColor if you need it
      borderColor: state.isFocused ? "#ddd" : isValid ? "#ddd" : "red",
      // overwrittes hover style
      "&:hover": {
        borderColor: state.isFocused ? "#ddd" : isValid ? "#ddd" : "red",
      },
    }),
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      height: "36px",
      minHeight: "36px",
      background: props.isDisabled ? "#e5e7eb" : "",
      borderColor: "#ddd",
      "&:hover": {
        borderColor: "#ddd",
      },
    }),
  };
  return (
    <div className="pr-2 mb-2 field-group">
      <label className="field-label">{title}</label>
      <Select
        styles={meta.touched && meta.error ? customStylesError : customStyles}
        //{...field}
        {...props}
        placeholder={<p className="truncate">{placeholder}</p>}
      />
      <ErrorMessage component="div" name={field.name} className="input-error" />
    </div>
  );
};
