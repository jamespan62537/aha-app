import { Outlet } from "react-router-dom";

import HomeProvider from "./providers/HomeProvider";

const Home = () => {
  return (
    <HomeProvider>
      <div className="flex h-full">
        <div className="h-full w-full p-5 pt-0 md:pb-20 md:pt-14">
          <Outlet />
        </div>
      </div>
    </HomeProvider>
  );
};

export default Home;
