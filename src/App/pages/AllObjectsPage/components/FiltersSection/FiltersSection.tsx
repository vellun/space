import searchIcon from "assets/icons/search.svg";
import cn from "classnames";
import { Button, Input, MultiDropdown } from "components/";
import { type Option } from "components/MultiDropdown";
import { astroObjectsCategories } from "config/";

import styles from "./FiltersSection.module.scss";

type FiltersProps = {
  className?: string;
};

export const FiltersSection: React.FC<FiltersProps> = ({ className }) => {
  return (
    <div className={cn(styles.section, className)}>
      <div className={styles.section__search}>
        <Input placeholder="Find an astronomical object" onChange={() => ""} />
        <Button onClick={() => ""}>
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
};
