import { Navbar } from "App/components";
import { Header } from "components";
import { Outlet } from "react-router";

import styles from "./Layout.module.scss";

export const Layout: React.FC = () => (
  <div className={styles.layout}>
    <div className={styles.layout__container}>
      <Header className={styles.layout__header} />
      <Navbar className={styles.layout__navbar} />
    </div>
    <Outlet />
  </div>
);
