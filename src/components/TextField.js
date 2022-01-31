import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ title, textarea = false, showLable = true, rows = 5, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="pr-2 mb-2 field-group">
      {showLable ? (
        <label className="field-labe truncate"  htmlFor={field.name}>
          {title}
        </label>
      ) : (
        <></>
      )}
      {textarea ? (
        <textarea className={`textarea ${meta.touched && meta.error && "is-invalid"}`} {...field} {...props} rows={rows} />
      ) : (
        <input
          className={`field-input ${meta.touched && meta.error && "is-invalid"}`}
          {...field}
          {...props}
          autoComplete="off"
        />
      )}
      <ErrorMessage component="div" name={field.name} className="input-error" />
    </div>
  );
};
