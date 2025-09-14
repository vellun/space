import { Text } from "components/Text";
import { getAstroObject, type AstroObject } from "firestore/";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import styles from "./ObjectDetailPage.module.scss";

export const ObjectDetailPage = () => {
  const { objectName } = useParams();
  const [object, setObject] = useState<AstroObject>();

  useEffect(() => {
    const fetchObject = async () => {
      setObject(await getAstroObject(objectName!));
    };
    fetchObject();
  }, [objectName]);

  if (!object) {
    return;
  }

  return (
    <div className={styles.page}>
      <div className={styles["page__top-container"]}>
        <img
          className={styles["page__top-container-image"]}
          src={object.imageDetailPath}
          alt="Planet image"
        />
        <div className={styles["page__top-container__left-side"]}>
          <div className={styles.title}>
            <Text tag="div" view="title" weight="bold">
              {object.name}
            </Text>
            <Text tag="div" view="p-24" weight="medium" color="semi">
              {object.category}
            </Text>
          </div>
          <div className={styles.aa}>
            <div className={styles.info}>
              {Object.entries(object.info).map(([key, value]) => (
                <>
                  <Text
                    className={styles["info-key"]}
                    tag="div"
                    view="p-22"
                    weight="medium"
                    color="semi"
                  >
                    {key}
                  </Text>
                  <Text className={styles["info-value"]} tag="div" view="p-22" weight="medium">
                    {value}
                  </Text>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Text className={styles.page__description} tag="div" view="p-20" weight="normal" color="semi">
        {object.description}
      </Text>
    </div>
  );
};
