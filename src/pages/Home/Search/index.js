import Input from "../../../components/Input";
import Slider from "./components/Slider";
import TitleBlock from "./components/TitleBlock";

const Search = () => {

  return (
    <div className="mx-auto flex w-full max-w-[725px] flex-col">
      <TitleBlock title="Search" isShowHr>
        <Input placeholder="Keyword" />
      </TitleBlock>
      <TitleBlock title="# Of Results Per Page" isShowHr>
        <Slider />
      </TitleBlock>
    </div>
  );
};

export default Search;
