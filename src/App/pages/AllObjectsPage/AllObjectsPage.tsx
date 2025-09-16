import { Header } from "App/components";
import { CardsSection } from "App/pages/AllObjectsPage/components/CardsSection";
import { FiltersSection } from "App/pages/AllObjectsPage/components/FiltersSection";
import line from "assets/icons/filter-section-line.svg";
import { Pagination } from "components/";
import type { AstroObject } from "firestore/";
import { getAstroObjects } from "firestore/";
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

  return (
    <div>
      <Header className={styles.page__header} />
      <div className={styles.page}>
        <div className={styles.page__filters_section}>
          <img className={styles.page__line} src={line} alt="Line element" />
          <FiltersSection className={styles.page__filters} />
        </div>
        <CardsSection objects={objects} />
      </div>
      <Pagination />
    </div>
  );
};
