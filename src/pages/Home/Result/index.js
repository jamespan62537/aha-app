import { Link } from "react-router-dom";

import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import LoadingCard from "../../../components/LoadingCard";
import TitleBlock from "../Search/components/TitleBlock";
import ResultCard from "./components/ResultCard";
import ResultContainer from "./components/ResultContainer";

import { useHome } from "../providers/HomeProvider";

const EMPTY_COUNT = 5;

const Result = () => {
  const emptyResult = Array.from({ length: EMPTY_COUNT }, () => null);

  const { resultList, isError, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useHome();

  const renderResults = () => {
    if (isError)
      return (
        <div>
          <p>Oops...</p>
        </div>
      );

    return (
      <ResultContainer>
        {resultList.map((item) => (
          <ResultCard key={item.id} name={item.name} username={item.username} avatar={item.avatar} />
        ))}
        {(isLoading || isFetchingNextPage) && emptyResult.map((_, index) => <LoadingCard key={index} />)}
      </ResultContainer>
    );
  };

  return (
    <div className="relative mx-auto flex h-full w-full max-w-[725px] flex-col">
      <div className="mb-6 flex items-center">
        <Link className="absolute -left-8 flex items-center" to="/">
          <Icon type={Icon.Type.Arrow} />
        </Link>
        <TitleBlock title="Results" className="mb-0" />
      </div>
      {renderResults()}
      {hasNextPage && (
        <div className="mt-10">
          <Button title="More" type={Button.ButtonType.CONTAINED} size={Button.ButtonSize.XLARGE} onClick={fetchNextPage} />
        </div>
      )}
    </div>
  );
};

export default Result;
