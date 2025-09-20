import { createContext, useContext } from "react";
import type { AllObjectsStore } from "store/AllObjectsStore";

export type ObjectsContextType = {
  store: AllObjectsStore;
};

export const ObjectsContext = createContext<ObjectsContextType | null>(null);

export const useAllObjectsPageStore = () => {
  const context = useContext(ObjectsContext);
  return context?.store;
};
