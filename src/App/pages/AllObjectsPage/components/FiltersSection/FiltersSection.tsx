import searchIcon from "assets/icons/search.svg";
import cn from "classnames";
import { Button, Input, MultiDropdown } from "components/";
import { type Option } from "components/MultiDropdown";
import { astroObjectsCategories } from "config/";
import { observer } from "mobx-react-lite";
import type { AllObjectsStore } from "store";
import type { FiltersStore } from "store/FiltersStore";

import styles from "./FiltersSection.module.scss";

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
        value={[]}
        onChange={() => ""}
        getTitle={(value: Option[]) =>
          value.length !== 0 ? value[0].value : "Select object category"
        }
      />
    </div>
  );
});
