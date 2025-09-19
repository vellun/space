import { AllObjectsStore } from "store/AllObjectsStore";

import { ObjectsContext } from "./context";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const StoreInitializer = ({ store }: { store: AllObjectsStore }) => {
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    store.query.setSearch(search);
    store.query.setNavigate(navigate); 
  }, [store, search, navigate]);

  return null;
};

export const ObjectsProvider = ({ children }: { children: React.ReactNode }) => {
  const store = new AllObjectsStore();
  return <ObjectsContext.Provider value={{ store }}>
      <StoreInitializer store={store} />
      {children}
    </ObjectsContext.Provider>
};
