import { ReactComponent as IconTab } from "./icons/tab.svg";

const TypeEnum = {
  TAB: "tab",
};

const { TAB } = TypeEnum;

const TypeMap = {
  [TAB]: IconTab,
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
