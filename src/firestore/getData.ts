import { db } from "config/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import type { AstroObject } from "firestore/";

import { astroObjectConverter } from "./converters";

export async function getAstroObjects(): Promise<AstroObject[]> {
  const objectsRef = collection(db, "objects").withConverter(astroObjectConverter);
  const querySnapshot = await getDocs(objectsRef);

  const objects: AstroObject[] = [];

  querySnapshot.forEach((doc) => {
    objects.push(doc.data());
  });

  return objects;
}

export async function getAstroObject(objectName: string): Promise<AstroObject> {
  const objectRef = doc(db, "objects", objectName).withConverter(astroObjectConverter);
  const objectSnap = await getDoc(objectRef);

  return objectSnap.data()!;
}
