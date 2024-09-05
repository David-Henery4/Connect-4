import { useContext } from "react";
import { AppContext } from "./context";

const useGlobalHook = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalHook must be used within a AppProvider");
  }
  return context
};

export default useGlobalHook;
