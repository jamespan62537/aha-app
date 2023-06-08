import { createContext, useContext, useMemo } from "react";

const context = createContext();

export const useHome = () => {
  const contextData = useContext(context);

  if (contextData === undefined) {
    throw new Error("useHome must be used within a HomeProvider");
  }

  return contextData;
};

const HomeProvider = ({ children }) => {
  const contextData = useMemo(() => {
    return {};
  }, []);

  return <context.Provider value={contextData}>{children}</context.Provider>;
};

export default HomeProvider;
