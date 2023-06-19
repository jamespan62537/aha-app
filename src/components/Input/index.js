import { useCallback } from "react";

const Input = ({ onChange, placeholder, value }) => {
  const handleChange = useCallback(
    (e) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <input
      className="focus-visible:none w-full rounded-md border-[3px] border-solid border-white border-opacity-50 bg-transparent px-4 py-5 focus:border-orange-500 focus:outline-none"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
