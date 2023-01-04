import React from "react";
import PropTypes from "prop-types";

import { useState } from "react";

import ErrorMessage from "./ErrorMessage";
import { addErrorIntoField } from "./Utils";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    label,
    register,
    required,
    name,
    errors,
    Lable,
    type,
    placeholder,
    classNameForLable,
    classNameForInput,
  } = props;

  FormInput.propTypes = {
    label: PropTypes.string,
    register: PropTypes.func,
    required: PropTypes.bool,
    name: PropTypes.string,
    errors: PropTypes.object,
    Lable: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    classNameForLable: PropTypes.string,
    classNameForInput: PropTypes.string,
  };

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <>
      <div className="mb-6">
        <label className={classNameForLable}>{Lable}</label>
        <input
          type={type}
          className={classNameForInput}
          {...register(
            label,
            { required },
            { ...addErrorIntoField(errors[name]) }
          )}
          placeholder={placeholder}
          // eslint-disable-next-line react/no-unknown-property
          variant="filled"
          onBlur={handleFocus}
          // eslint-disable-next-line react/no-unknown-property
          focused={focused.toString()}
          autoSave="false"
          // aria-invalid={errors.name ? "true" : "false"}
        />
        {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
      </div>
    </>
  );
};

export default FormInput;
