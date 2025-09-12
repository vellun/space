import headerImage from "assets/images/header-image-light.png";
import cn from "classnames";

import styles from "./Header.module.scss";

type HeaderProps = {
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className }) => (
  <div className={cn(styles.header, className)}>
    <img src={headerImage} alt="Header image" />
  </div>
);
