import { useCallback } from "react";

import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Slider from "./components/Slider";
import TitleBlock from "./components/TitleBlock";

import { useHome } from "../providers/HomeProvider";

const Search = () => {
  const navigate = useNavigate();

  const { pages, searchQuery, handleChangePerPage, handleChangeKeyword, isReady } = useHome();

  const handleSearch = useCallback(() => {
    navigate(`/result?keyword=${searchQuery.keyword}&perPage=${searchQuery.perPage}`);
  }, [navigate, searchQuery]);

  return (
    <div className="mx-auto flex h-full w-full max-w-[725px] flex-col">
      <TitleBlock title="Search" isShowHr>
        <Input placeholder="Keyword" onChange={handleChangeKeyword} />
      </TitleBlock>
      <TitleBlock title="# Of Results Per Page" isShowHr>
        <div className="flex items-baseline gap-2">
          {isReady ? (
            <>
              <span className="text-5xl leading-[72px]">{pages.total}</span>
              <span className="text-base">results</span>
            </>
          ) : (
            <span className="text-5xl leading-[72px]">Searching...</span>
          )}
        </div>
        <Slider value={searchQuery.perPage} onChange={handleChangePerPage} />
      </TitleBlock>
      <div className="flex flex-grow items-end">
        <Button title="Search" type={Button.ButtonType.CONTAINED} size={Button.ButtonSize.XLARGE} onClick={handleSearch} />
      </div>
    </div>
  );
};

export default Search;
