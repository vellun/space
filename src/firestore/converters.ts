import type {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";

import { AstroObject } from "./AstroObject";

export const astroObjectConverter: FirestoreDataConverter<AstroObject> = {
  toFirestore: (object: AstroObject): DocumentData => {
    return {
      name: object.name,
      category: object.category,
      description: object.description,
      imagePath: object.imagePath,
    };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): AstroObject => {
    const data = snapshot.data(options);
    return new AstroObject(data.name, data.category, data.description, data.imagePath);
  },
};
