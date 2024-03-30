import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./page.module.css";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TagOutlined } from "@mui/icons-material";

const HomePage: FC = () => (
  <div className={styles["root"]}>
    <aside className={styles["sidebar"]}>
      <div></div>
      <List>
        <ListItem disablePadding>
          <ListItemButton LinkComponent={Link} href="tags">
            <ListItemIcon>
              <TagOutlined />
            </ListItemIcon>
            <ListItemText primary="Tags" />
          </ListItemButton>
        </ListItem>
      </List>
    </aside>
    <div className={styles["content"]}>
      <Outlet />
    </div>
  </div>
);

export default HomePage;
