import imagePathNeptune from "assets/images/neptune.png";
import imagePathPluto from "assets/images/pluto.png";
import imagePathSun from "assets/images/sun.png";
import { Card } from "components/";
import { Link } from "react-router";

import styles from "./CardsSection.module.scss";

export const CardsSection = () => {
  const objects = [
    {
      id: 1,
      name: "Pluto",
      category: "dwarf planet",
      description:
        "Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune.",
      imagePath: imagePathPluto,
      info: "1.31 x 1022 kg\n-223,15 °C",
    },
    {
      id: 2,
      name: "Neptune",
      category: "dwarf planet",
      description:
        "Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune.",
      imagePath: imagePathNeptune,
      info: "1.31 x 1022 kg\n-223,15 °C",
    },
    {
      id: 3,
      name: "The Sun",
      category: "star",
      description:
        "Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune.",
      imagePath: imagePathSun,
      info: "1.31 x 1022 kg\n-223,15 °C",
    },
  ];

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
