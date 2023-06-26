import { createContext, useContext, useMemo, useState } from "react";

import { useInfiniteQuery } from "react-query";

import { getFollowers, getFollowing } from "../../../apis/home";

const context = createContext(undefined);

export const TabEnum = {
  FOLLOWERS: "followers",
  FOLLOWING: "following",
};

const { FOLLOWERS, FOLLOWING } = TabEnum;

export const TabOption = [
  {
    label: "Followers",
    value: FOLLOWERS,
  },
  {
    label: "Following",
    value: FOLLOWING,
  },
];

export const useFollow = () => {
  const contextData = useContext(context);

  if (contextData === undefined) throw new Error("useFollow must be used within a FollowProvider");

  return contextData;
};

const FollowProvider = ({ children }) => {
  const [currentTab, setCurrentTab] = useState(TabOption[0].value);

  const followersQuery = useInfiniteQuery(["followers"], ({ pageParam = 1 }) => getFollowers({ page: pageParam, pageSize: 10 }), {
    enabled: false,
    getNextPageParam: (lastPage) => {
      return lastPage.page + 1 <= lastPage.totalPages ? lastPage.page + 1 : undefined;
    },
  });

  const contextData = useMemo(() => {
    return {
      currentTab,
      setCurrentTab,
      followersQuery,
    };
  }, [currentTab, followersQuery]);

  return <context.Provider value={contextData}>{children}</context.Provider>;
};

export default FollowProvider;
