import { createContext, useContext } from "react";
import { ObjectStore } from "store/ObjectStore";

export type ObjectContextType = {
  store: ObjectStore;
};

export const ObjectContext = createContext<ObjectContextType | null>(null);

export const useObjectPageStore = () => {
  const objectContext = useContext(ObjectContext);
  return objectContext?.store;
};

