import { useEffect } from "react";

import { useFollow } from "../../providers/FollowProvider";

const Followers = () => {
  const { followersQuery } = useFollow();

  console.log('followersQuery', followersQuery);

  useEffect(() => {
    followersQuery.remove();
    followersQuery.refetch();
  }, []);

  return <></>;
};

export default Followers;
