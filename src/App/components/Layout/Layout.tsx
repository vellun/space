import { Navbar } from "App/components";
import { Header } from "App/components";
import { Outlet } from "react-router";

import styles from "./Layout.module.scss";

export const Layout: React.FC = () => (
  <div className={styles.layout}>
    <div className={styles.layout__container}>
      <Navbar className={styles.layout__navbar} />
      {/* <Header className={styles.layout__header} /> */}
    </div>
    <Outlet />
  </div>
);
