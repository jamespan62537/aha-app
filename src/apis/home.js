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

export const getFollowers = ({ page, pageSize = 10 }) =>
  http({
    method: "GET",
    url: "users/all",
    params: {
      page,
      pageSize,
    },
  }).then((response) => response);

export const getFollowing = ({ page = 1, pageSize = 10 }) =>
  http({
    method: "GET",
    url: "users/friends",
    params: {
      page,
      pageSize,
    },
  }).then((response) => response);
