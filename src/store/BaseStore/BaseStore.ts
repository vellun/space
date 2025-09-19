import { action, makeObservable, observable, reaction } from "mobx";
import { FiltersStore } from "store/FiltersStore";
import { QueryParamsStore } from "store/RootStore/QueryParamsStore";
import { Meta } from "utils/meta";

export abstract class BaseStore {
  query: QueryParamsStore;
  filters: FiltersStore;
  meta: Meta = Meta.initial;
  error: string | null = null;

  constructor() {
    this.query = new QueryParamsStore();
    this.filters = new FiltersStore(this.query);

    makeObservable(this, {
      query: observable,
      filters: observable,
      meta: observable,
      setMeta: action,
      init: action,
      fetch: action,
    });

    reaction(
      () => ({
        filter: this.query.getParam("filter"),
        page: this.query.getParam("page"),
      }),
      ({ filter, page }, { filter: previousFilter, page: previousPage }) => {
        if (filter !== previousFilter || page !== previousPage) {
          this.fetch();
        }
      }
    );
  }

  init() {
    console.log("BASE STORE INIT");
    this.fetch();
  }

  abstract fetch(): Promise<void>;

  setMeta(newMeta: Meta) {
    this.meta = newMeta;
  }
}
