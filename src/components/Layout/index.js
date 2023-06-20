import { useMemo } from "react";

import { Link, useLocation } from "react-router-dom";

import useMobileHook from "../../hooks/useMobileHook";

import Icon from "../Icon";
import NavBar from "../NavBar";

const pageConfig = {
  "/": {
    isShowNavBar: true,
  },
  "/result": {
    isShowNavBar: false,
  },
  "/tags": {
    isShowNavBar: false,
  },
};

const Layout = ({ children }) => {
  const isMobile = useMobileHook();
  const { pathname } = useLocation();
  const isShowNavBar = useMemo(() => (isMobile ? pageConfig[pathname].isShowNavBar : true), [isMobile, pathname]);

  return (
    <main className="flex h-full w-full flex-col bg-black-primary md:flex-row">
      {isShowNavBar && <NavBar />}
      {!isShowNavBar && (
        <Link to="/" className="flex h-[70px] items-center gap-5 px-6 text-white">
          <Icon type={Icon.Type.Arrow} />
          <p className="text-2xl leading-9">Home page</p>
        </Link>
      )}
      <section className="scroll-hidden order-1 flex-1 overflow-y-scroll md:order-2">{children}</section>
    </main>
  );
};

export default Layout;
