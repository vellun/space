import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import type { QueryParamsStore } from "store/RootStore/QueryParamsStore";

export const useQueryParamsStoreInit = (queryStore: QueryParamsStore): void => {
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    queryStore.setNavigate(navigate);
    queryStore.setSearch(search);
  }, [search, navigate, queryStore]);
};
