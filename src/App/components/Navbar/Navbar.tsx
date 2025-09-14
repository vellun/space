import logoIcon from "assets/icons/logo.svg";
import cn from "classnames";
import { Text } from "components/Text";
import { Link } from "react-router";

import styles from "./Navbar.module.scss";

type NavbarProps = {
  className?: string;
};

export const Navbar: React.FC<NavbarProps> = ({ className }) => (
  <div className={cn(styles.navbar, className)}>
    <div className={styles.navbar__menu}>
      <Link to="/" className={styles.navbar__menu__link1}>
        <Text tag="div" view="p-22" weight="medium" color="primary">
          astro objects
        </Text>
      </Link>
      <img src={logoIcon} className={styles.navbar__menu__logo} alt="Space Logo" />
      <Link to="/" className={styles.navbar__menu__link2}>
        <Text tag="div" view="p-22" weight="medium" color="primary">
          categories
        </Text>
      </Link>
    </div>
  </div>
);
