import { Card, Loader } from "components/";
import { routesConfig } from "config/";
import type { AstroObject } from "firestore/";
import { Link } from "react-router";
import { Meta } from "utils/meta";

import { useInfiniteScroll } from "App/pages/AllObjectsPage/hooks/useInfiniteScroll";
import { observer } from "mobx-react-lite";
import styles from "./CardsSection.module.scss";

type CardsSectionProps = {
  objects: AstroObject[];
  meta: Meta;
  onFetch: () => void;
  isEnd: boolean;
};

export const CardsSection: React.FC<CardsSectionProps> = observer(({ objects, meta, onFetch, isEnd }) => {
  const fetchRef = useInfiniteScroll(onFetch, meta === Meta.loading, isEnd);

  if (objects.length === 0 && meta === Meta.loading) {
    return <Loader size="xl"/>;
  }

  if (meta === Meta.error) {
    return <div>An error occured</div>;
  }

  if (objects.length === 0) {
    return <div>Asto objects not found</div>;
  }

  return (
    <div className={styles.section}>
      {objects.map((object) => <Link to={routesConfig.astroObjectDetail.create(object.name)}>
          <Card
            title={object.name}
            captionSlot={object.category}
            subtitle={object.description}
            image={object.imagePath}
          />
        </Link>)}

      <div ref={fetchRef}>
          {!isEnd && <Loader />}
        </div>

        {isEnd && <p>That's all :)</p>}
    </div>
  );
});
