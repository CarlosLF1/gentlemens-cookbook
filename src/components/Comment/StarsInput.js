import React from "react";
import { Field } from "formik";

import Stars from "./Stars";
const fieldName = "stars";

const StarsInput = () => (
  <Field name={fieldName} id={fieldName} type="number">
    {({ field: { value }, form: { setFieldValue } }) => (
      <div>
        <label htmlFor={fieldName} className={"label-color"}>
          {fieldName}
        </label>
        <div>
        <Stars
            count={value}
            handleClick={number => setFieldValue(fieldName, number)}
          />
        </div>
      </div>
    )}
  </Field>
);

export default StarsInput;