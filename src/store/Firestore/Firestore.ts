import { db } from "config/firebase";
import { FirebaseError } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getDocsFromCache,
  getDocsFromServer,
  limit,
  query,
  QueryConstraint,
  QuerySnapshot,
  startAfter,
  where,
} from "firebase/firestore";
import type { ObjectsApiRequestParams } from "store/Firestore/types";
import { type ApiResp } from "utils/apiTypes";

import { astroObjectConverter } from "./converters";
import type { AstroObject } from "./models";

class Firestore {
  private async _getObjectsSnapshot(
    source: "server" | "cache",
    params: ObjectsApiRequestParams
  ): Promise<QuerySnapshot> {
    const objects: AstroObject[] = [];
    const objectsRef = collection(db, "objects").withConverter(astroObjectConverter);

    let constraints: QueryConstraint[] = []
    let objectsOuery = query(objectsRef)
    if (params.search !== undefined) {
      constraints.push(where("name", "==", params.search))
      // constraints.push(where('name', '>=', params.search), where('name', '<=', params.search + '\uf8ff'))
    }
    if (params.category !== undefined && params.category !== "all") {
      constraints.push(where("category", "==", params.category))
    }
    
    if (params.perPage) {
      constraints.push(limit(params.perPage));
    }
    
    if (params.startAfter) {
      constraints.push(startAfter(params.startAfter));
    }
    
    objectsOuery = query(objectsRef, ...constraints)

    const querySnapshot =
      source === "server"
        ? await getDocsFromServer(objectsOuery)
        : await getDocsFromCache(objectsOuery);

    return querySnapshot

    // querySnapshot.forEach((doc) => {
    //   objects.push(doc.data());
    // });

    // return objects;
  }

  async getAstroObjects(params: ObjectsApiRequestParams): Promise<ApiResp<QuerySnapshot<AstroObject>>> {
    try {
      const objects = await this._getObjectsSnapshot("server", params);
      return { isError: false, data: objects };
    } catch (e) {
      if (e instanceof FirebaseError && e.code === "unavailable") {
        const snapshot = await this._getObjectsSnapshot("cache", params);
        if (!snapshot.empty) {
          return { isError: false, data: snapshot };
        }
      }
      return { isError: true, data: e };
    }
  }

  async getAstroObject(objectName: string): Promise<AstroObject> {
    const objectRef = doc(db, "objects", objectName).withConverter(astroObjectConverter);
    const objectSnap = await getDoc(objectRef);

    return objectSnap.data()!;
  }
}

export const firebaseStore = new Firestore();
