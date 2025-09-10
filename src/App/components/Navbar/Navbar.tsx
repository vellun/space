import logoIcon from "assets/icons/logo.svg";
import cn from "classnames";
import { Text } from "components/Text";

import styles from "./Navbar.module.scss";

type NavbarProps = {
  className?: string;
};

export const Navbar: React.FC<NavbarProps> = ({ className }) => (
  <div className={cn(styles.navbar, className)}>
    <div className={styles.navbar__menu}>
      <a href="/">
        <Text view="p-24" weight="medium" color="primary">
          astro objects
        </Text>
      </a>
      <img src={logoIcon} alt="Space Logo" />
      <a href="/">
        <Text view="p-24" weight="medium" color="primary">
          categories
        </Text>
      </a>
    </div>
  </div>
);
