import cx from "classnames";
import { NavLink } from "react-router-dom";

import logo from "../../images/logo.png";
import Icon from "../Icon";

const pageLinks = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Tags",
    to: "/tags",
  },
];

const NavBar = () => {
  return (
    <nav className="order-2 flex h-16 w-full flex-row items-center justify-center gap-10 bg-black-800 md:order-1 md:h-full md:w-20 md:flex-col md:justify-start md:gap-0 md:pt-9">
      <img className="mb-10 hidden md:block" src={logo} alt="logo" />
      {pageLinks.map((page) => {
        return (
          <NavLink to={page.to} key={page.name}>
            {({ isActive }) => (
              <div
                className={cx("text-center hover:text-white md:mb-5", {
                  "text-white": isActive,
                  "text-gray-800": !isActive,
                })}
              >
                <Icon type={Icon.Type.TAB} />
                <p
                  className={cx("hidden md:block", {
                    visible: isActive,
                    invisible: !isActive,
                  })}
                >
                  {page.name}
                </p>
              </div>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NavBar;
