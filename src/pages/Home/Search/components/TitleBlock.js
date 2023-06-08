const TitleBlock = ({ title, isShowHr, children }) => (
  <>
    <p className="text-2xl leading-9 mb-5">{title}</p>
    {children}
    {isShowHr && <hr className="border-t-1 my-[30px] border-solid border-white border-opacity-50" />}
  </>
);

export default TitleBlock;
