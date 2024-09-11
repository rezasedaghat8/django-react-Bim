import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function InputForm({ formik, type, id, placeholder, styleInput = "", name }) {
  // this state to manage the password show and hidden mode ....sntsayi trick
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
          type === `checkbox`
            ? `w-4 h-4`
            : `w-full dark:shadow-none  shadow-lg     transition-all duration-100 text-gray-700`
        }   p-[0.35rem]  pr-3 pl-3 bg-ToastedAlmond outline-none focus:border-t-3 border dark:border-boder_color border-softPeach  text-sm
        md:text-base   placeholder:text-right md:placeholder:text-sm placeholder:pr-3 dark:placeholder:text-gray-400 placeholder:text-gray-500   placeholder:text-sm      `}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        // defaultValue="سلام"
        value={formik.values[name]}
      />
      {type === "password" && formik.values[name] ? (
        <button
          type="button"
          className="absolute right-4 top-1.5 text-black "
          onClick={() => onClickHideOrShowPass()}
        >
          {/* another time add icon instead of show and hide */}
          {inputType === "password" ? (
            <FaEye className="text-2xl " />
          ) : (
            <FaEyeSlash className="text-2xl " />
          )}
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default InputForm;
