import { ObjectProvider, useObjectPageStore } from "App/pages/ObjectDetailPage/context";
import { Text } from "components/Text";
import { useParams } from "react-router";
import { Meta } from "utils/meta";

import { Loader } from "components/";
import { observer } from "mobx-react-lite";
import styles from "./ObjectDetailPage.module.scss";

export const ObjectDetailPageContent = observer(() => {
  const store = useObjectPageStore();

  if (store === undefined) {
    return;
  }

  if (store.meta === Meta.loading) {
    return <Loader size="xl"/>;
  }
  
  if (store.meta === Meta.error) {
    return <div>An error occured</div>;
  }

  const object = store.object;

  if (!object) {
    return <div>Asto object not found</div>;
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
          <div className={styles["info-container"]}>
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
});

export const ObjectDetailPage = () => {
  const { objectName } = useParams<{ objectName: string }>();

  if (!objectName) {
    return
  }

  return (
    <ObjectProvider objectName={objectName}>
      <ObjectDetailPageContent />
    </ObjectProvider>
  );
};
