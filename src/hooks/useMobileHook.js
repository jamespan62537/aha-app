import { useWindowSize } from "react-use";

const mobileSize = 768;

const useMobileHook = () => {
  const { width } = useWindowSize();

  return width < mobileSize;
};

export default useMobileHook;
