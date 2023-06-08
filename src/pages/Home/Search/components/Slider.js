import { useCallback } from "react";

import { SCInput } from "./SliderStyle";

const resultValueList = ["3", "6", "9", "12", "15"];

const Slider = ({ value = "9", onChange = () => {} }) => {
  const handleChange = useCallback((e) => {
    onChange(e.target.value);
  }, [onChange]);

  return (
    <div className="w-full">
      <SCInput type="range" min={3} max={15} step={1} name="slider" list="sliderList" value={value} onChange={handleChange} />

      <datalist id="sliderList" className="flex items-center justify-between">
        {resultValueList.map((value) => (
          <option className="text-base opacity-50" value={value} label={value} />
        ))}
      </datalist>
    </div>
  );
};

export default Slider;
