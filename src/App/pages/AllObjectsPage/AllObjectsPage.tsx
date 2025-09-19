import { Header } from "App/components";
import { CardsSection } from "App/pages/AllObjectsPage/components/CardsSection";
import { FiltersSection } from "App/pages/AllObjectsPage/components/FiltersSection";
import { ObjectsProvider, useAllObjectsPageStore } from "App/pages/AllObjectsPage/context";
import line from "assets/icons/filter-section-line.svg";
import { Pagination } from "components/";
import { observer } from "mobx-react-lite";

import styles from "./AllObjectsPage.module.scss";

const AllObjectsContentPage = observer(() => {
  const store = useAllObjectsPageStore();

  if (store === undefined) {
    return;
  }

  return (
    <div>
      <Header className={styles.page__header} />
      <div className={styles.page}>
        <div className={styles["page__filters-section"]}>
          <img className={styles.page__line} src={line} alt="Line element" />
          <FiltersSection className={styles.page__filters} store={store} />
        </div>
        <CardsSection objects={store.objects} meta={store.meta} />
      </div>
      <Pagination />
    </div>
  );
});

export const AllObjectsPage = () => {
  return (
    <ObjectsProvider>
      <AllObjectsContentPage />
    </ObjectsProvider>
  );
};
