import { createContext, useCallback, useContext, useMemo, useState } from "react";

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

  const [keywordParam, setKeywordParam] = useState(keyword);
  const [perPageParam, setPerPageParam] = useState(perPage);

  const handleChangePerPage = useCallback((value) => {
    setPerPageParam(value);
  }, []);

  const handleChangeKeyword = useCallback((value) => {
    setKeywordParam(value);
  }, []);

  const { data, refetch, remove, isError, isLoading, isFetchingNextPage } = useInfiniteQuery(
    ["results"],
    ({ pageParam = 1 }) => getResults({ page: pageParam, pageSize: perPageParam, keyword: keywordParam }),
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
    [keywordParam]
  );

  const contextData = useMemo(() => {
    return {
      isReady: isReady(),
      resultList,
      pages,
      keywordParam,
      perPageParam,
      isError,
      isLoading,
      isFetchingNextPage,
      handleChangePerPage,
      handleChangeKeyword,
    };
  }, [
    isReady,
    resultList,
    pages,
    keywordParam,
    perPageParam,
    isError,
    isLoading,
    isFetchingNextPage,
    handleChangePerPage,
    handleChangeKeyword,
  ]);

  return <context.Provider value={contextData}>{children}</context.Provider>;
};

export default HomeProvider;
