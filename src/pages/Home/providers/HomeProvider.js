import { createContext, useCallback, useContext, useMemo } from "react";

import { useInfiniteQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { useDebounce, useSetState } from "react-use";

import { getResults } from "../../../apis/home";

import { getPaginationData } from "../../../utils/combination";

const context = createContext();

export const useHome = () => {
  const contextData = useContext(context);

  if (contextData === undefined) {
    throw new Error("useHome must be used within a HomeProvider");
  }

  return contextData;
};

const HomeProvider = ({ children }) => {
  let [searchParams] = useSearchParams();

  // Parse query string
  const { keyword = "", perPage = 9 } = useMemo(() => {
    const result = {};
    for (const [key, value] of searchParams.entries()) {
      result[key] = value;
    }
    return result;
  }, [searchParams]);

  const [searchQuery, setSearchQuery] = useSetState({ keyword, perPage });

  const handleChangePerPage = useCallback(
    (value) => {
      setSearchQuery({ perPage: value });
    },
    [setSearchQuery]
  );

  const handleChangeKeyword = useCallback(
    (value) => {
      setSearchQuery({ keyword: value });
    },
    [setSearchQuery]
  );

  const { data, refetch, remove, isError, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["results"],
    ({ pageParam = 1 }) => getResults({ page: pageParam, pageSize: searchQuery.perPage, keyword: searchQuery.keyword }),
    {
      enabled: false,
      getNextPageParam: (lastPage) => {
        return lastPage.page + 1 <= lastPage.totalPages ? lastPage.page + 1 : undefined;
      },
    }
  );

  // Combine result pagination into default structure
  const { data: resultList, pages } = getPaginationData(data);

  // Verify if the input has been updated
  const [isReady] = useDebounce(
    () => {
      remove();
      refetch();
    },
    800,
    [searchQuery]
  );

  const contextData = useMemo(() => {
    return {
      isReady: isReady(),
      resultList,
      pages,
      searchQuery,
      isError,
      isLoading,
      isFetchingNextPage,
      hasNextPage,
      fetchNextPage,
      handleChangePerPage,
      handleChangeKeyword,
    };
  }, [
    isReady,
    resultList,
    pages,
    searchQuery,
    isError,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    handleChangePerPage,
    handleChangeKeyword,
  ]);

  return <context.Provider value={contextData}>{children}</context.Provider>;
};

export default HomeProvider;
