import { memo, useState } from "react";
import "./formInput.css";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const FormInput = ({
  id,
  label,
  onChange,
  errorMessage,
  type,
  ...otherProps
}) => {
  const [focused, setFocused] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  console.log(`FormInput Component re-render in ${id}`);

  return (
    <div className="formInput">
      <label htmlFor={id}>{label}</label>

      {type === "password" ? (
        <>
          <input
            type={isShow ? "text" : type}
            onChange={onChange}
            onBlur={handleFocus}
            focused={focused.toString()}
            {...otherProps}
          />
          {isShow ? (
            <IoMdEyeOff
              size={22}
              className="icon"
              onClick={() => setIsShow(!isShow)}
            />
          ) : (
            <IoMdEye
              size={22}
              className="icon"
              onClick={() => setIsShow(!isShow)}
            />
          )}
        </>
      ) : (
        <input
          type={type}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
          {...otherProps}
        />
      )}

      <span>{errorMessage}</span>
    </div>
  );
};

export default memo(FormInput);
