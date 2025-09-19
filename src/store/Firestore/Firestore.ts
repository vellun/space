import { db } from "config/firebase";
import { FirebaseError } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getDocsFromCache,
  getDocsFromServer,
  query,
  where,
} from "firebase/firestore";
import type { ObjectsApiRequestParams } from "store/Firestore/types";
import { type ApiResp } from "utils/apiTypes";

import { astroObjectConverter } from "./converters";
import type { AstroObject } from "./models";

class Firestore {
  async getAll(
    source: "server" | "cache",
    params: ObjectsApiRequestParams
  ): Promise<AstroObject[]> {
    const objects: AstroObject[] = [];
    const objectsRef = collection(db, "objects").withConverter(astroObjectConverter);

    let objectsOuery = query(objectsRef)
    if (params.search) {
      objectsOuery = query(objectsRef, where("name", "==", params.search))
    }

    const querySnapshot =
      source === "server"
        ? await getDocsFromServer(objectsOuery)
        : await getDocsFromCache(objectsOuery);

    querySnapshot.forEach((doc) => {
      objects.push(doc.data());
    });

    return objects;
  }

  async getAstroObjects(params: ObjectsApiRequestParams): Promise<ApiResp<AstroObject[]>> {
    try {
      const objects = await this.getAll("server", params);
      return { isError: false, data: objects };
    } catch (e) {
      if (e instanceof FirebaseError && e.code === "unavailable") {
        const objects = await this.getAll("cache", params);
        if (objects.length !== 0) {
          return { isError: false, data: objects };
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
