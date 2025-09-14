import { CardsSection } from "App/pages/AllObjectsPage/components/CardsSection";
import { FiltersSection } from "App/pages/AllObjectsPage/components/FiltersSection";
import line from "assets/icons/filter-section-line.svg";
import { Button } from "components/";
import type { AstroObject } from "firestore/";
import { getAstroObjects, saveAstroObjects } from "firestore/";
import { useEffect, useState } from "react";

import styles from "./AllObjectsPage.module.scss";

export const AllObjectsPage = () => {
  const [objects, setObjects] = useState<AstroObject[]>([]);

  useEffect(() => {
    const fetchObjects = async () => {
      setObjects(await getAstroObjects());
    };
    fetchObjects();
  }, []);

  const updateDb = async () => {
    try {
      await saveAstroObjects();
      console.log("Астрономические объекты успешно сохранены!");
    } catch (error) {
      console.error("Ошибка при сохранении:", error);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.page__header}>
        <img className={styles.page__line} src={line} alt="Line element" />
        <FiltersSection className={styles.page__filters} />
      </div>
      <CardsSection objects={objects} />
      {/* Потом уберу, это для отладки */}
      {/* <Button onClick={updateDb}>Update db (debug)</Button> */}
    </div>
  );
};
