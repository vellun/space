import { makeObservable, observable, runInAction } from "mobx";
import { BaseStore } from "store/BaseStore";
import { firebaseStore } from "store/Firestore";
import type { AstroObject } from "store/Firestore/models";
import { Meta } from "utils/meta";

export class AllObjectsStore extends BaseStore {
  _astroObjects: AstroObject[] = [];

  constructor() {
    super();
    makeObservable(this, { _astroObjects: observable });
  }

  async fetch() {
    this.setMeta(Meta.loading);

    const requestParams = this.query.getApiObjectsParams();

    console.log(requestParams)

    const { isError, data } = await firebaseStore.getAstroObjects(requestParams);

    if (isError) {
      console.log("Error occured:", data);
      this.setMeta(Meta.error);
      return;
    }

    runInAction(() => {
      this.meta = Meta.success;
      this._astroObjects = data;
    });
  }

  get objects(): AstroObject[] {
    return this._astroObjects;
  }
}
