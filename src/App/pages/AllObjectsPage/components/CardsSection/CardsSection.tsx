import { Card, Loader } from "components/";
import { routesConfig } from "config/";
import type { AstroObject } from "firestore/";
import { Link } from "react-router";
import { Meta } from "utils/meta";

import styles from "./CardsSection.module.scss";

type CardsSectionProps = {
  objects: AstroObject[];
  meta: Meta;
};

export const CardsSection: React.FC<CardsSectionProps> = ({ objects, meta }) => {
  if (meta === Meta.loading) {
    return <Loader />;
  }

  if (meta === Meta.error) {
    return <div>An error occured</div>;
  }

  return (
    <div className={styles.section}>
      {objects.map((object) => (
        <Link to={routesConfig.astroObjectDetail.create(object.name)}>
          <Card
            title={object.name}
            captionSlot={object.category}
            subtitle={object.description}
            image={object.imagePath}
          />
        </Link>
      ))}
    </div>
  );
};
