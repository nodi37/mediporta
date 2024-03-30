import { FC, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useRedirectHook } from "./hooks/useRedirectHook";
import NavigationDrawer from "../../components/organisms/NavigationDrawer";
import styles from "./page.module.css";
import { navigationMenuItems } from "./children";

const AppPage: FC = () => {
  useRedirectHook("/tags");
  const [navigationOpen, setNavigationOpen] = useState(false);

  return (
    <div className={styles["root"]}>
      <NavigationDrawer
        items={navigationMenuItems}
        isOpen={navigationOpen}
        setIsOpen={setNavigationOpen}
      />
      <div className={styles["top-bar"]}>
        <Button onClick={() => setNavigationOpen(true)}>
          <Menu />
        </Button>
        <Link to={"/"}>
          <h1 className={styles["top-bar-heading"]}>BrowseApp</h1>
        </Link>
      </div>
      <div className={styles["content-wrapper"]}>
        <Outlet />
      </div>
    </div>
  );
};

export default AppPage;