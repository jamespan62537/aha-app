export const getPaginationData = (data) => {
  const defaultData = {
    data: [],
    pages: {
      page: 0,
      totalPages: 0,
      total: 0,
      pageSize: 0,
    },
  };

  if (!data) return defaultData;

  defaultData.data = data?.pages?.reduce((acc, item) => {
    acc.push(...item.data);
    return acc;
  }, []);

  defaultData.pages = {
    total: data.pages[0].total,
    totalPages: data.pages[0].totalPages,
    page: data.pages[0].page,
    pageSize: data.pages[0].pageSize,
  };

  return defaultData;

};
