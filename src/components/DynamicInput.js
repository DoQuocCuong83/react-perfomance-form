import React from "react";

const DynamicInput = ({
  typeInput,
  nameInput,
  className,
  placeholder,
  disableInput,
  form,
}) => {
  const valueInput = form.useValueInput(nameInput);
  const touchInput = form.useValueTouch(nameInput);
  const errorInput = form.useValueError(nameInput);

  const handleChangeValue = (value) => {
    form.changeValues({ name: nameInput, value });
  };

  const handleTouch = () => {
    form.addTouches({ name: nameInput, value: true });
  };

  return (
    <>
      {["text", "password"].includes(typeInput) ? (
        <input
          value={valueInput || ""}
          onChange={(e) => handleChangeValue(e.target.value)}
          onBlur={handleTouch}
          placeholder={placeholder || ""}
          disabled={disableInput}
          className={className}
        />
      ) : null}
      {touchInput && errorInput ? (
        <div className="plugins-message-container mb-2">
          <div className="help-block">{errorInput}</div>
        </div>
      ) : null}
    </>
  );
};

export default DynamicInput;
