import React, { useId } from "react";
import { TextFieldProps } from "./types";

export const TextField: React.FC<TextFieldProps> = ({
  label,
  error,
  helperText,
  className = "",
  ...props
}) => {
  const generatedId = useId();
  const id = props.id || generatedId;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-700 select-none"
        >
          {label}
        </label>
      )}
      <input
        {...props}
        id={id}
        className={`px-3 py-2 bg-white border rounded-md text-sm shadow-sm transition-all placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
        disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed
        ${error ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : "border-gray-300"}
        ${className}`}
      />

      {error ? (
        <p className="text-xs text-red-600 font-medium">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-gray-500">{helperText}</p>
      ) : null}
    </div>
  );
};
