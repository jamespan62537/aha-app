import { useMemo } from "react";

import cx from "classnames";

import Followers from "./components/Followers";
import Following from "./components/Following";

import { TabEnum, TabOption, useFollow } from "../providers/FollowProvider";

const Follow = () => {
  const { currentTab, setCurrentTab } = useFollow();
  const isFollowersTab = useMemo(() => currentTab === TabEnum.FOLLOWERS, [currentTab]);

  return (
    <div className="w-[375px] pt-5">
      <div className="flex w-full">
        {TabOption.map((tab) => (
          <button
            key={tab.value}
            className={cx("mb-5 flex-1 border-b-2 border-solid border-transparent py-3 font-bold", {
              "border-white": currentTab === tab.value,
              "text-gray-500": currentTab !== tab.value,
            })}
            onClick={() => setCurrentTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {isFollowersTab ? <Followers /> : <Following />}
    </div>
  );
};

export default Follow;
