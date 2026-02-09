import { forwardRef } from "react";

const Input = forwardRef(function Input({ textarea, label }, ref) {
  const classes =
    "bg-stone-200 p-2 rounded-sm border-b-2 border-stone-300 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-2 my-5">
      <label htmlFor={label} className="uppercase font-bold text-sm text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} rows="3" id={label} className={classes} />
      ) : (
        <input ref={ref} type={label === "date" ? "date" : "text"} id={label} className={classes} />
      )}
    </p>
  );
});

export default Input;
