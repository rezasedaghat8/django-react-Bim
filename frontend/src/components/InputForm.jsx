import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function InputForm({ formik, type, id, placeholder, styleInput = "", name }) {
  // this state to manage the password show and hidden mode ....sntdayi trick
  const [inputType, setInputType] = useState(type);
  function onClickHideOrShowPass() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }

  return (
    <div
      className={`${styleInput} ${
        type === `checkbox` ? `` : `w-full`
      }  relative`}
    >
      <input
        type={inputType}
        id={id}
        placeholder={placeholder}
        className={`${styleInput} ${
          type === `checkbox` ? `` : `w-full`
        }  p-1 pr-3 pl-3 bg-ToastedAlmond outline-none border-t-3 border-boder_color text-sm   placeholder:text-right placeholder:text-xl focus:-translate-y-0.5   transition-all duration-300 `}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />
      {type === "password" && formik.values[name] ? (
        <button
          type="button"
          className="absolute right-4 top-2 text-black "
          onClick={() => onClickHideOrShowPass()}
        >
          {/* another time add icon instead of show and hide */}
          {inputType === "password" ? (
            <FaEye className="text-xl " />
          ) : (
            <FaEyeSlash className="text-xl " />
          )}
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default InputForm;
