import http from ".";

export const getResults = ({ page, pageSize = 9, keyword = "" }) =>
  http({
    method: "GET",
    url: "users/all",
    params: {
      page,
      pageSize,
      keyword,
    },
  }).then((response) => response);
