import searchIcon from "assets/icons/search.svg";
import cn from "classnames";
import { Button, Input, MultiDropdown } from "components/";
import { type Option } from "components/MultiDropdown";
import { astroObjectsCategories } from "config/";
import { observer } from "mobx-react-lite";
import type { AllObjectsStore } from "store/AllObjectsStore";
import type { FiltersStore } from "store/FiltersStore";

import styles from "./FiltersSection.module.scss";
import { useCallback } from "react";

type FiltersProps = {
  className?: string;
  store: AllObjectsStore;
};

export const FiltersSection: React.FC<FiltersProps> = observer(({ className, store }) => {
  const handleInputChange = (value: string) => {
    store.filters.setSearch(value);
  };

  const handleButtonClick = () => {
    store.fetch();
  };

  const handleSelect = (selectedOptions: Option[]) => {
    const selectedType = selectedOptions.at(-1)?.key;

    if (selectedType) {
      store.filters.setFilter(selectedType);
    }
  };

  const getTitle = useCallback((values: Option[]) => {
    return values.length === 0 ? "Select object category" : values.map(({ value }) => value).join(", ");
  }, []);

  return (
    <div className={cn(styles.section, className)}>
      <div className={styles.section__search}>
        <Input value={store.filters.search} placeholder="Find an astronomical object" onChange={handleInputChange} />
        <Button onClick={handleButtonClick}>
          <img src={searchIcon} alt="Search Icon" width="24px" height="24px" />
        </Button>
      </div>
      <MultiDropdown
        className={styles.section__filter}
        options={astroObjectsCategories}
        value={store.filters.filter ? [{ key: store.filters.filter, value: store.filters.filter }] : []}
        onChange={handleSelect}
        getTitle={getTitle}
      />
    </div>
  );
});
