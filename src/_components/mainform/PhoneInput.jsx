"use client";
import React from "react";

const PhoneInput = ({
  value,
  onChange,
  style,
  className,
  placeholder = "Phone Number",
  name = "phoneNumber",
  maxLength,
  disabled = false,
  required = false,
  allowOnlyNumbers = true,
  ...props
}) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    const finalValue = allowOnlyNumbers
      ? inputValue.replace(/[^0-9]/g, "")
      : inputValue;

    if (onChange) {
      onChange(finalValue);
    }
  };

  const handleKeyDown = (e) => {
    if (allowOnlyNumbers) {
      const allowedKeys = [
        "Backspace",
        "Delete",
        "Tab",
        "Escape",
        "Enter",
        "ArrowLeft",
        "ArrowRight",
      ];
      const isNumber = /[0-9]/.test(e.key);

      if (!isNumber && !allowedKeys.includes(e.key)) {
        e.preventDefault();
      }
    }
  };

  const defaultClassName = "py-2 px-4 w-full outline-none rounded-md";
  const combinedClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;

  return (
    <input
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(e) => handleChange(e)}
      onKeyDown={handleKeyDown}
      style={style}
      className={combinedClassName}
      maxLength={maxLength}
      disabled={disabled}
      required={required}
      {...props}
    />
  );
};

export default PhoneInput;
