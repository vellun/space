import cn from "classnames";
import { Text } from "components/Text";
import { ArrowRightIcon } from "components/icons/ArrowRightIcon";
import { useEffect, useState } from "react";

import styles from "./Pagination.module.scss";

export const Pagination = () => {
  const [buttonActive, setbuttonActive] = useState<number | string>(1);
  const [leftArrowColor, setLeftArrowColor] = useState<"primary" | "secondary" | "accent">(
    "secondary"
  );
  const [rightArrowColor, setRightArrowColor] = useState<"primary" | "secondary" | "accent">(
    "primary"
  );

  const [page, setPage] = useState<number>(1);
  const totalPages = 9;

  useEffect(() => {
    return () => {
      setbuttonActive(page);
      setLeftArrowColor(page === 1 ? "secondary" : "primary");
      setRightArrowColor(page === totalPages ? "secondary" : "primary");
    };
  }, [page, totalPages]);

  const handlePageChange = (newPage: number) => {
    setbuttonActive(newPage);
    setPage(newPage);
  };

  const handleClick = (value: number | string) => {
    if (typeof value === "number") {
      handlePageChange(value);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <button
          className={cn(styles.pagination__arrow, styles.pagination__item)}
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          <ArrowRightIcon color={leftArrowColor} width="32" height="32" />
        </button>
        <div className={styles.pagination__numbers}>
          {[1, 2, 3, "...", 9].map((value, index) => (
            <button
              key={index}
              className={cn(styles["pagination__numbers-item"], styles.pagination__item, {
                [styles["pagination__numbers-item_active"]]: value === buttonActive,
              })}
              onClick={() => handleClick(value)}
            >
              <Text className={styles.pagination__numbers__text} view="p-18">
                {value}
              </Text>
            </button>
          ))}
        </div>
        <button
          className={cn(styles.pagination__arrow, styles.pagination__item)}
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          <ArrowRightIcon
            className={styles["pagination__arrow-right"]}
            width="32"
            height="32"
            color={rightArrowColor}
          />
        </button>
      </div>
    </div>
  );
};
