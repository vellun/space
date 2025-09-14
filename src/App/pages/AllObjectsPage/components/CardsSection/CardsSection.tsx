import { Card } from "components/";
import type { AstroObject } from "firestore";
import { Link } from "react-router";

import styles from "./CardsSection.module.scss";

type CardsSectionProps = {
  objects: AstroObject[];
};

export const CardsSection: React.FC<CardsSectionProps> = ({ objects }) => {
  return (
    <div className={styles.section}>
      {objects.map((object) => (
        <Link to="/">
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
