import { Outlet } from "react-router-dom";

import FollowProvider from "./providers/FollowProvider";
import HomeProvider from "./providers/HomeProvider";

import Follow from "./Follow";

const Home = () => {
  return (
    <HomeProvider>
      <FollowProvider>
        <div className="flex h-full">
          <div className="h-full w-full p-5 pt-0 md:pb-20 md:pt-14">
            <Outlet />
          </div>
          <Follow />
        </div>
      </FollowProvider>
    </HomeProvider>
  );
};

export default Home;
