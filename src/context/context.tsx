"use client";
import { createContext, useState, Dispatch, SetStateAction } from "react";

interface GlobalContextType {
  gameStarted: boolean;
  setGameStarted: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<GlobalContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <AppContext.Provider value={{ gameStarted, setGameStarted }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
