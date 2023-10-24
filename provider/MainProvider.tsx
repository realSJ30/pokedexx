"use client";
import { ViewMode } from "@/utils/enums";
import React, { createContext, useEffect, useState } from "react";

interface MainProviderProps {
  children: React.ReactNode;
}
export const MainContext = createContext({
  viewMode: ViewMode.CARD_VIEW,
  setViewMode: (mode: ViewMode) => {},
  offSet: 0,
  limit: 10,
  count: 100,
  setOffset: (value: number) => {},
  setCount: (value: number) => {},
});
const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  const [viewMode, setViewMode] = useState(ViewMode.CARD_VIEW);
  const [offSet, setOffSet] = useState(0);
  const [count, setCount] = useState(0);
  const limit = 10;

  return (
    <MainContext.Provider
      value={{
        viewMode,
        offSet,
        limit,
        count,
        setViewMode: (mode) => setViewMode(mode),
        setOffset: (value) => setOffSet(value),
        setCount: (value) => setCount(value),
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
