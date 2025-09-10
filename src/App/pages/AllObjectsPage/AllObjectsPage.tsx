import { FiltersSection } from "App/pages/AllObjectsPage/components/FiltersSection";
import line from "assets/icons/filter-section-line.svg";

import styles from "./AllObjectsPage.module.scss";

export const AllObjectsPage = () => {
  return (
    <div className={styles.page}>
      <img className={styles.page__line} src={line} alt="Line element" />
      <FiltersSection className={styles.page__filters} />
    </div>
  );
};
