import { AllObjectsStore } from "store/AllObjectsStore";

import { ObjectsContext } from "./context";

export const ObjectsProvider = ({ children }: { children: React.ReactNode }) => {
  const store = new AllObjectsStore();
  store.init();
  return <ObjectsContext.Provider value={{ store }}>{children}</ObjectsContext.Provider>;
};
