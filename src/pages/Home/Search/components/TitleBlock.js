import cx from "classnames";

const TitleBlock = ({ title, isShowHr, className, children }) => (
  <>
    <p className={cx("mb-5 text-2xl leading-9", className)}>{title}</p>
    {children}
    {isShowHr && <hr className="border-t-1 my-[30px] border-solid border-white border-opacity-50" />}
  </>
);

export default TitleBlock;
