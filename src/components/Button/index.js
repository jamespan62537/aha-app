import { useMemo } from "react";

import cx from "classnames";

export const ButtonType = {
  OUTLINED: "outlined",
  CONTAINED: "contained",
};

export const ButtonSize = {
  XLARGE: "xlarge",
  MIDDLE: "middle",
};

const { MIDDLE, XLARGE } = ButtonSize;
const { CONTAINED, OUTLINED } = ButtonType;

const sizeStyleMap = {
  [XLARGE]: "w-full max-w-[335px] h-10 rounded text-sm leading-3 font-bold",
  [MIDDLE]: "w-full max-w-[60px] h-7 text-xs leading-3",
};

const typeStyleMap = {
  [OUTLINED]: "border-solid border-[1px] border-white bg-transparent text-white",
  [CONTAINED]: "border-solid border-[1px] border-white bg-white text-black-primary",
};

const Button = ({ size = MIDDLE, type = CONTAINED, onClick, title }) => {
  const sizeStyle = useMemo(() => sizeStyleMap[size], [size]);
  const typeStyle = useMemo(() => typeStyleMap[type], [type]);

  return (
    <button className={cx("flex items-center justify-center", sizeStyle, typeStyle)} onClick={onClick}>
      {title}
    </button>
  );
};

Button.ButtonSize = ButtonSize;
Button.ButtonType = ButtonType;
export default Button;
