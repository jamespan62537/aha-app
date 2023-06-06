import { ReactComponent as IconTab } from "./icons/tab.svg";
import { ReactComponent as IconArrow } from "./icons/arrow.svg";

const TypeEnum = {
  TAB: "tab",
  Arrow: "arrow"
};

const { TAB, Arrow } = TypeEnum;

const TypeMap = {
  [TAB]: IconTab,
  [Arrow]: IconArrow
};

const Icon = ({ type }) => {
  if (!TypeMap[type]) return null;

  const IconComponent = TypeMap[type];

  return (
    <div className="inline-flex">
      <IconComponent />
    </div>
  );
};

Icon.Type = TypeEnum;
export default Icon;
